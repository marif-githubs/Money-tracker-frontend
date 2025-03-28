import { AiOutlineMenuUnfold } from "react-icons/ai";
export const Sidedrawer = () => {


    return (
        <>
            <div className="drawer lg:drawer-open w-50">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-none drawer-button lg:hidden md:block">
                        <AiOutlineMenuUnfold />
                    </label>
                </div>
                <div className="drawer-side z-10 ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-50 p-9 ">
                        {/* Sidebar content here */}
                        <li><a>Dashboard</a></li>
                        <li><a>Expence List</a></li>
                        <li><a>Income List</a></li>
                        <li><a>Assets List</a></li>
                    </ul>
                </div>
            </div >
        </>
    )
}