import React, { useState } from 'react'
import './Dashboard.css'
import { Navbar } from '../../components/Navbar/Navbar'
import CreateEmp from '../../components/CreateEmp/CreateEmp'
import Employeelist from '../../components/Employeelist/Employeelist'
import Welcome from '../../components/Welcome/Welcome'
import { Routes, Route } from "react-router-dom";
import Login from '../Login/Login'
import EmployeeEdit from '../../components/EmployeeEdit/EmployeeEdit'
const Dashboard = () => {
  const[showLogin,setShowLogin]=useState(false)
  const url ="http://localhost:4000";
  const [id,setId]=useState("")
  const[userr,setUserr]=useState("")
  const [designation,setDesignation]=useState("All")
  return (
    
    <div>
      {!showLogin?<Login setUserr={setUserr} setShowLogin={setShowLogin}/>:<Navbar userr={userr} setShowLogin={setShowLogin} />}
      <Routes>
        <Route path='/' element={<Welcome />}></Route>

        <Route path='/list' element={<Employeelist designation={designation} setDesignation={setDesignation} url={url} setId={setId}/>}></Route>

        <Route path='/createemp' element={<CreateEmp url={url}/>}></Route>
        
        <Route path='/edit' element={<EmployeeEdit url={url} id={id}/>}></Route>
      </Routes>
        
      
    </div>
  )
}

export default Dashboard