import React, { useEffect, useState } from "react";
import "./Employeelist.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
const Employeelist = ({ url, setId,designation,setDesignation }) => {
  
  const [list, setList] = useState([]);
  const deleteEmp = async (id1) => {
    try {
      console.log(id1);
      const response = await axios.post(`${url}/api/employee/delete`, {id:id1});
  
      if (response.data.success) {
        alert("Data Deleted");
      } else {
        alert("Error in deleting data");
      }
    } 
    catch (error) {
      console.error("Error:", error);
      alert("An error occurred while deleting data");
    }
    
  }
  const callDelete=(id)=>{
    deleteEmp(id)
    fetchList()
  }
  const fetchList = async () => {
    const responce = await axios.get(`${url}/api/employee/list`);
    if (responce.data.success) {
      setList(responce.data.data);
    } else {
      toast.error("error in  get data");
    }
  };
  
  
  useEffect(() => {
    fetchList();
  },[list]);




 



  return (
    <div className="main">
      <h1>Employee list</h1>
      <div className="total ">
        <p>Total Employee : {list.length}</p>
        <Link to="/createemp"><div className="btn-primaryy">Create Employee</div></Link>
      </div>
      <div className="list add flex-col">
        <div className="search">
          <div className="text">Search</div>
          <div className="input">
            <select  onChange={(e)=> setDesignation(e.target.value)} className="input" id="designation"  name="designation" required>
                    <option value="All">All</option>
                    <option  value="HR ">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select></div>
        </div>
        <div className="list-table">
          <div className="list-table-format title">
            <b>Unique id</b>
            <b>Image</b>
            <b>Name</b>
            <b>Email</b>
            <b>Mobile No</b>
            <b>Designation</b>
            <b>gender</b>
            <b>course</b>
            <b>created date</b>
            <b>Action</b>
          </div>
        </div>
        {list.map((item, index) => {
          if(designation==="All"||designation===item.designation){
            return (
              <div className="list-table-format" key={index}>
                <p>{index}</p>
                <img src={`${url}/images/` + item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.phone}</p>
                <p>{item.designation}</p>
  
                <p>{item.gender}</p>
                <p>{item.course}</p>
                <p>{item.createdate}</p>
                <p>
                  <Link to="/edit">
                    <div
                      className="btn btn-primary primary"
                      onClick={setId(item._id)}
                    >
                      Edit
                    </div>
                  </Link>
                  <div onClick={()=>callDelete(item._id)}>
                  <div
                    className="btn btn-primary primary">
                    Delete
                  </div>
                  </div>
                </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Employeelist;
