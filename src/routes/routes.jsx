import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import { Home } from '../pages/Home';
import { Expenditure } from "../pages/Expenditure";
import { Incomes } from '../pages/Incomes';
import { Assets } from "../pages/Assets";
import { Dashboard } from "../pages/Dashboard";
import { Authpage } from '../pages/Authpage';
import { Register } from "../components/Register";
import { Login } from '../components/Login';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
                    { path: "auth/login", element: <Login /> },
                    { path: "auth/register", element: <Register /> },
            {
                path: "home",
                element: <Home />,
                children: [
                    { path: "dashboard", element: <Dashboard /> },
                    { path: "expense-page", element: <Expenditure /> },
                    { path: "income-page", element: <Incomes /> },
                    { path: "assets-page", element: <Assets /> }
                ]
            }
        ]
    }
]);
