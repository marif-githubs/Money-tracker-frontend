import "../App.css"
import { Navbar } from '../components/Navbar.jsx'
import { Sidedrawer } from '../components/Sidedrawer.jsx'
import { Contantpage } from "./Contantpage.jsx"
import { Footer } from "../components/Footer.jsx"
import { Register } from "../components/Register.jsx"

export const Home = () => {

    return (
        <div className="h-screen md:w-full lg:w-5/6 m-auto ">
            <Navbar></Navbar>
            <div className="flex flex-col md:flex-row">
                <Sidedrawer></Sidedrawer>
                <Contantpage></Contantpage>
            </div>
            <Footer></Footer>
            {/* <Register></Register> */}
        </div>
    )
}