import React, { useEffect, useState } from "react";
import "./EmployeeEdit.css";
import axios from "axios";

const EmployeeEdit = ({url,id}) => {

  // const responce
  const [data, setData] = useState({});
  console.log(id);

const getEmpData = async(id) => {
    const responce = await axios.post(`${url}/api/employee/details`,{id:id})
    setData(responce.data.data)
    console.log(responce.data);
};
const onChangeHandler=(e)=>{
    e.preventDefault();
    const name =e.target.name;
    const value=e.target.value;
    setData(data=>({...data,[name]:value}))


}
const getValue=(e)=>{
    const { value, checked,name } = e.target;

    if (checked) {
      setData(data=>({...data,[name]:value}))
      
    } else {
    }
    checked=false
    
};
const onUpdateHandler = async (event) => {
    event.preventDefault();
    console.log(data);

    try {
        const response = await axios.post(`${url}/api/employee/edit/${id}`, data);
        if (response.data.success) {
            console.log(response.data.data);
            alert('Data updated successfully');
        } else {
            alert('Error in updating data');
        }
    } catch (error) {
        console.error('Error:', error);
        // Provide more specific error feedback to the user
        alert('An error occurred while updating data');
    }
}

  useEffect(() => {
    getEmpData(id);
  }, []);

  return (
    <div className="main">
      <h3 className="create-title">Edit Details</h3>
      <div className="registration">
      <form method="POST" enctype="multipart/form-data">
      <div class="form-group">
                <label for="name">Name:</label>
                <input value={data.name} onChange={onChangeHandler} type="text" id="name" name="name" required/>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input onChange={onChangeHandler} value={data.email} type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="mobile">Mobile No:</label>
                <input value={data.phone} onChange={onChangeHandler} type="Number" id="mobile" name="phone" required/>
            </div>
            <div class="form-group">
                <label for="designation">Designation:</label>
                <select value={data.designation}  onChange={onChangeHandler} id="designation" name="designation"  required>
                    <option>Select Designation</option>
                    <option value="HR ">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales">Sales</option>
                </select>
            </div>
            <div class="form-group">
                <label>Gender:</label>
                {data.gender==="male"?<input  value='male' onChange={onChangeHandler} type="radio" id="male" name="gender" checked  required/>:<input value='male' onChange={onChangeHandler} type="radio" id="male" name="gender"  required/>}

                <label for="male">Male</label>

                {data.gender==="female"?<input  value='female' checked onChange={onChangeHandler} type="radio" id="female" name="gender" />:<input  value='female' onChange={onChangeHandler} type="radio" id="female" name="gender" />}

                <label for="female">Female</label>
            </div>
            <div class="form-group">
                <label>Courses:</label>

                {data.course==="MCA"?<input value="MCA" onChange={getValue} type="checkbox" id="mca" checked name="course" />:<input value="MCA" onChange={getValue} type="checkbox" id="mca" name="course" />}


                <label for="mca">MCA</label>

                {data.course==="BCA"?<input value="BCA" onChange={getValue} type="checkbox" id="bca" checked name="course" />:<input value="BCA" onChange={getValue} type="checkbox" id="bca" name="course"/>}


                <label for="bca">BCA</label>

                {data.course==="BSC"?<input value="BSC" onChange={getValue} type="checkbox" id="bsc" checked name="course" />:<input value="BSC" onChange={getValue} type="checkbox" id="bsc" name="course" />}

                <label for="bca">BSC</label>
    
            </div>
            <div class="form-group">
                <label for="image">Upload Image:</label>
                
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" name="image"  required/>
                
            </div>
            
            <button onClick={onUpdateHandler}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeEdit;
