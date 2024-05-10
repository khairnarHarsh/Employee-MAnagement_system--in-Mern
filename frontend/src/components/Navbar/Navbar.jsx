import React from 'react'
import './Navbar.css'
import { Link ,useNavigate} from 'react-router-dom'

export const Navbar = ({setShowLogin,userr}) => {
  const navigate =useNavigate();

  const logout=()=>{
  localStorage.removeItem("token");
  console.log("logout");
  setShowLogin(false)

  navigate("/")
}
  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="div1  collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/list" className="nav-link" >Employee list</Link>
          </li>
          <li className="nav-item">
            <Link to="/createemp" className="nav-link" >Create Employee</Link>
          </li>
          </ul>
         
      </div>
      <div className="div2 collapse navbar-collapse">
      <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">{userr}</a>
          </li>
          <li className="nav-item">
            <div onClick={logout} className="nav-link " aria-disabled="true">Logout</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
