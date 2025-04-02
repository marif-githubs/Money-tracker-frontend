import { Outlet } from "react-router-dom"
import PageDataProvider from "../store/function.jsx"


export const Contantpage = () => {

    return (
        <PageDataProvider>
            <Outlet />
        </PageDataProvider>
    )
}