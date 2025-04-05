import { createContext, useEffect, useReducer, useState } from "react";
import api from "./axios";

export const PageData = createContext({
    expList: [],
    incList: [],
    assList: [],
    addItem: () => { },
    deleteItem: () => { },
    loading: false,
});

const dataFunction = (state, action) => {
    let newexpList = [...state.expList];
    let newincList = [...state.incList];
    let newassList = [...state.assList];
    // add initial list issue
    switch (action.type) {
        case "INITIAL_ITEMS":
            newexpList = action.payload.exp_entries
            newincList = action.payload.inc_entries
            newassList = action.payload.ass_entries
            break
        case "ADD_ITEM":
            switch (action.payload.type) {
                case "expense":
                    newexpList = [action.payload, ...state.expList]
                    break;
                case "income":
                    console.log(newincList)
                    newincList = [action.payload, ...state.incList]
                    console.log(newincList)
                    break;
                case "asset":
                    newassList = [action.payload, ...state.assList]
                    break;
            }
            break;
        case "DELETE_ITEM":
            switch (action.payload.type) {
                case "expense":
                    newexpList = state.expList.filter(item => item.t_id !== action.payload.id);
                    break;
                case "income":
                    newincList = state.incList.filter(item => item.t_id !== action.payload.id);
                    break;
                case "asset":
                    newassList = state.assList.filter(item => item.t_id !== action.payload.id);
                    break;
            }
            break;
    }
    return {
        expList: newexpList,
        incList: newincList,
        assList: newassList
    }
};

const PageDataProvider = ({ children }) => {
    const [data, dispatch] = useReducer(dataFunction, {
        expList: [],
        incList: [],
        assList: [],
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();

        api.get("https://money-tracker-backend-8trv.onrender.com/transaction/entries", { signal: controller.signal })
            .then(response => {
                dispatch({
                    type: "INITIAL_ITEMS",
                    payload: response.data,
                });
            })
            .catch(error => {
                // console.error("Error fetching data:", error);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, []);

    const addItem = async (title, amount, description, type) => {
        try {
            const response = await api.post("https://money-tracker-backend-8trv.onrender.com/transaction/entry", {
                title,
                amount,
                description,
                type
            }).then(response => {
                console.log(response.data)
                dispatch({
                    type: "ADD_ITEM",
                    payload: response.data.item
                });
            });

        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const deleteItem = async (id, type) => {
        try {
            await api.delete(`https://money-tracker-backend-8trv.onrender.com/transaction/entry/${id}`);
            dispatch({
                type: "DELETE_ITEM",
                payload: { id, type }
            });
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <PageData.Provider value={{
            expList: data.expList,
            incList: data.incList,
            assList: data.assList,
            addItem,
            deleteItem,
            loading
        }}>
            {children}
        </PageData.Provider>
    )
};

export default PageDataProvider;
