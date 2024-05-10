import React, { useState } from "react";
import "./CreateEmp.css";
import axios from 'axios'

const CreateEmp = ({url}) => {
    const [image ,setImage]= useState(false)
    const [date,setDate]=useState("")
    
    const [data,setData]=useState({
     
        name:"",
        email:"",
        phone:"",
        designation:"",
        gender:"",
        createdate:"",
        course:"",
        
    })
    const onChangeHandler=(e)=>{
        e.preventDefault();
        const name =e.target.name;
        const value=e.target.value;
        setData(data=>({...data,[name]:value}))
    

    }
    // console.log(lastupdatedCourses);
    const getValue=(e)=>{
        const { value, checked,name } = e.target;
    
        if (checked) {
          setData(data=>({...data,[name]:value}))
          
        } else {
        }
        checked=false
        
  };
  const getCurrentDate= () =>{
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`
}



  const onSubmitHandler=async(event)=>{
    event.preventDefault() 
    console.log(data);
    setDate(getCurrentDate())
    console.log(date);

    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("email",data.email)
    formData.append("phone",Number(data.phone))
    formData.append("designation",data.designation)
    formData.append("gender",data.gender)
    formData.append("course",data.course)
    formData.append("image",image)
    formData.append("createdate",String(getCurrentDate()))
    const responce = await axios.post(`${url}/api/employee/add`,formData);
   

    if(responce.data.success){
        alert('Employee Added Successfully')
        setData({
            course:"",
            name:"",
            email:"",
            phone:"",
            designation:"HR",
            gender:"",
            createdate:"",
            
        })
        setImage(false)
    }
    else{
        alert('Something went wrong! Try again later');
    }

  }
  
  return (
    <div className="main" >
      <h3 className="create-title">Create Employee</h3>
      <div className="registration">
      <form onSubmit={onSubmitHandler} method="POST" enctype="multipart/form-data">
            <div class="form-group">
                <label for="name">Name:</label>
                <input value={data.name} onChange={onChangeHandler} type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label onChange={onChangeHandler} for="email">Email:</label>
                <input onChange={onChangeHandler} value={data.email} type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="mobile">Mobile No:</label>
                <input value={data.phone} onChange={onChangeHandler} type="Number" id="mobile" name="phone" required/>
            </div>
            <div class="form-group">
                <label for="designation">Designation:</label>
                <select  onChange={onChangeHandler} id="designation" name="designation" required>
                    <option value="">Select Designation</option>
                    <option value="HR ">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select>
            </div>
            <div class="form-group">
                <label>Gender:</label>
                <input value='male' onChange={onChangeHandler} type="radio" id="male" name="gender"  required/>
                <label for="male">Male</label>
                <input value='female' onChange={onChangeHandler} type="radio" id="female" name="gender" />
                <label for="female">Female</label>
            </div>
            <div class="form-group">
                <label>Courses:</label>
                <input value="MCA" onChange={getValue} type="checkbox" id="mca" name="course" />
                <label for="mca">MCA</label>
                <input value="BCA" onChange={getValue} type="checkbox" id="bca" name="course" />
                <label for="bca">BCA</label>
                <input value="BSC" onChange={getValue} type="checkbox" id="bsc" name="course" />
                <label for="bsc">BSC</label>
    
            </div>
            <div class="form-group">
                <label for="image">Upload Image:</label>
                
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" name="image"  required/>
                
            </div>
            <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default CreateEmp;
