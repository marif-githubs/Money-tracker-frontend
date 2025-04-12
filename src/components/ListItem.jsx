import { useContext } from 'react';
import '../App.css';
import { TbXboxX } from "react-icons/tb";
import { PageData } from '../store/function';

export const ListItem = ({ title, amount, description, id, type }) => {

    const { deleteItem } = useContext(PageData);

    const handleDelete = () => {
        deleteItem(id, type);
        console.log(id);
    }

    return (
        <>
            <li className="list-col " key={id}>
                <ul>
                    <li className="list-row flex pb-2" >
                        <div className='flex-grow md:min-w-50'>{title}</div>
                        <div className=''>{amount}</div>
                        <TbXboxX className='w-10 h-5 opacity-60' onClick={() => handleDelete()} />
                    </li>
                </ul>
                <div className="pl-4 text-sm font-semibold opacity-40 ">{description}</div>
                <div className="divider m-0" ></div>
            </li>

        </>
    )
}