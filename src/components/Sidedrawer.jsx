import { AiOutlineMenuUnfold } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const Sidedrawer = () => {


    return (
        <>
            <div className="drawer md:drawer-open w-50">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-none drawer-button md:hidden md:block">
                        <AiOutlineMenuUnfold />
                    </label>
                </div>
                <div className="drawer-side z-10 ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-50 p-9 ">
                        {/* Sidebar content here */}
                        <Link to="/home/dashboard"><li className="hover:bg-gray-300 py-3 px-4">Dashboard</li></Link>
                        <div className="divider m-0 p-0"></div>
                        <Link to="/home/expense-page"><li className="hover:bg-gray-300 py-3 px-4">Expence List</li></Link>
                        <div className="divider my-0"></div>
                        <Link to="/home/income-page"><li className="hover:bg-gray-300 py-3 px-4">Income List</li></Link>
                        <div className="divider my-0"></div>
                        <Link to="/home/assets-page"><li className="hover:bg-gray-300 py-3 px-4">Assets List</li></Link>
                    </ul>
                </div>
            </div >
        </>
    )
}