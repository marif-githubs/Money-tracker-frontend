import "../App.css"
import { useState } from "react"

export const Navbar = () => {

  const [username, setUsername] = useState('')

  const handleLogout = () => {
    localStorage.setItem('jwt_token', 'null');
    window.location.href = "/auth/login"
  }

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-8 bg-black">
        <div className="flex-1">
          <p className="select-none text-xl underline decoration-green-500" style={{ color: "white" }}>Money Tracker  </p>
        </div>
        <div className="flex gap-2">
          <div className="hidden md:inline">{username}</div>
          <button className="btn btn-soft btn-success" onClick={() => handleLogout()}> Log out</button>

        </div>
      </div>
    </>
  )
}
