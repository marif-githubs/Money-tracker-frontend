import { useNavigate } from "react-router-dom";
import api from "../store/axios"
import { useRef, useState } from "react"
import axios from "axios";

export const Register = () => {

    const [message, setMessage] = useState("");
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const cpassword = useRef();
    const navigate = useNavigate();

    const handleSignup = async () => {
        try {
            const response = await axios.post("https://money-tracker-backend-8trv.onrender.com/userAuth/register", {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            })

            if (response.data.status === 'Success') {
                navigate("/auth/login")
            } else {
                setMessage(response.data.Message);
            }

        } catch (err) {
            console.log(err);
        }

        username.current.value = "";
        email.current.value = "";
        password.current.value = "";
        cpassword.current.value = "";

    }

    return (
        <>
            {/* // <div className="flex flex-col w-80 gap-3 m-auto sm:mt-20   "> */}
            <div className="text-center font-bold text-xl">Register</div>
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
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                <input type="email" placeholder="mail@site.com" required ref={email} />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div>
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
            <label className="input validator">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                <input type="password" required placeholder="Password" minLength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" ref={cpassword} />
            </label>
            <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />At least one number
                <br />At least one lowercase letter
                <br />At least one uppercase letter
            </p>
            <button className="btn btn-primary" onClick={() => handleSignup()}>Submit</button>
        </>
    )
}