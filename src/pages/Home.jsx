import "../App.css"
import { Navbar } from '../components/Navbar.jsx'
import { Sidedrawer } from '../components/Sidedrawer.jsx'
import { Outlet } from "react-router-dom"
import PageDataProvider from "../store/function.jsx"
import { Footer } from "../components/Footer.jsx"

export const Home = () => {

    return (
        <div className="md:w-full lg:w-5/6 m-auto ">
            <Navbar></Navbar>
            <div className="flex flex-col h-screen md:flex-row">
                <Sidedrawer></Sidedrawer>
                <PageDataProvider>
                    <Outlet />
                </PageDataProvider>
            </div>
            <Footer></Footer>
        </div>
    )
}