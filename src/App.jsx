import "./App.css"
import { Navbar } from './components/Navbar.jsx'
import { Sidedrawer } from './components/Sidedrawer.jsx'
import { List } from './components/List.jsx'
import { Form } from './components/Form.jsx'
import { Footer } from "./components/Footer.jsx"
import { Register } from "./components/Register.jsx"
import { Dashboard } from "./components/Dashboard.jsx"
function App() {

  return (
    <>
      <div className="h-screen	md:w-full lg:w-5/6 m-auto ">
        <Navbar></Navbar>
        <div className="flex flex-col md:flex-row">
          <Sidedrawer></Sidedrawer>
          <div className="flex flex-col-reverse md:flex-row">
            <List className="md:flex-grow-2"></List>
            <Form></Form>
          </div>
          {/* <Dashboard></Dashboard> */}
        </div>
        <Footer></Footer>
        {/* <Register></Register> */}
      </div>
    </>
  )
}

export default App