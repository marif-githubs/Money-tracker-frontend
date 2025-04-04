import { Link, Outlet } from 'react-router-dom';

export const Authpage = () => {

    return (
        <div className="flex flex-col w-80 gap-3 m-auto my-20">

            <Outlet />

            <div className="flex gap-2">
                <Link to="/auth/login" className="flex-grow btn btn-soft btn-primary">Login</Link>
                <Link to="/auth/register" className="flex-grow btn btn-soft btn-primary">Signup</Link>
            </div>
        </div>
    )
}