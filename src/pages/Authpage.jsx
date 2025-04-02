import { Link, Outlet } from 'react-router-dom';

export const Authpage = () => {

    return (
        <div className="flex flex-col w-80 gap-3 m-auto my-20   ">
            <Outlet />
            {/* < Register /> */}
            {/* <Login /> */}
            <div className="flex gap-2">
                <button className="flex-grow btn btn-soft btn-primary"><Link to="/auth/login">Login</Link></button>
                <button className="flex-grow btn btn-soft btn-primary"><Link to="/auth/register">Signup</Link></button>
            </div>
        </div>
    )
}