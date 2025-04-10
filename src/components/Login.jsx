import { useRef, useState } from "react"
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [message, setMessage] = useState("");
    const username = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const handleLogin = async () => {

        const response = await axios.post("https://money-tracker-backend-8trv.onrender.com/userAuth/login", /*{ withCredentials: true },*/ {
            username: username.current.value,
            password: password.current.value,
        });

        if (response.data.status === 'Success') {
            localStorage.setItem('jwt_token', response.data.token);
            window.location.href = "/home/dashboard";
        } else {
            setMessage(response.data.Message);
        }

        username.current.value = "";
        password.current.value = "";
    }

    return (<>
                <div className="flex flex-col w-80 gap-3 m-auto my-20">
        <div className="text-center font-bold text-xl">Login</div>
        <div>{message}</div>
        <label className="input validator">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
            <input type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minLength="3" maxLength="30" title="Only letters, numbers or dash" ref={username} />
        </label>
        <p className="validator-hint hidden">
            Must be 3 to 30 characters
            <br />containing only letters, numbers or dash
        </p>
        <label className="input validator">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
            <input type="password" required placeholder="Password" minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" ref={password} />
        </label>
        <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />At least one number
            <br />At least one lowercase letter
            <br />At least one uppercase letter
        </p>
        <button className="btn btn-primary" onClick={() => handleLogin()}>Submit</button>
           
                <Link to="/auth/register" className="float-left btn btn-soft btn-primary w-45%">Signup</Link>
            
</div>
    </>
    )
}