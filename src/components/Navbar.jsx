jikjjjjimport "../App.css"

export const Navbar = () => {

  const handleLogout = () => {
    localStorage.setItem('jwt_token', 'null');
    window.location.href = "/auth/login"
  }

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-8">
        <div className="flex-1">
          <a className="select-none text-xl">Money Tracker</a>
        </div>
        
          <button className="btn btn-soft btn-primary" onClick={() => handleLogout()}> Log out</button>

          
      </div>
    </>
  )
}