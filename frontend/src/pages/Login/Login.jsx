import React, { useContext, useState } from "react";
import "./Login.css";
import { StoreContext } from "../../../context/StoreContext";
import axios from 'axios'
const Login = ({setShowLogin,setUserr}) => {
  const url ="http://localhost:4000"
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    newUrl += "/api/user/login";
    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      // setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      const userr = response.data.userr
      setUserr(userr)
      setShowLogin(true);
      console.log(userr);
    } else {
      alert(response.data.message);
    }
    
  
  };
  
  
return (
    <>
  <div class="wrapper">
  <div class="login-box">
    <form onSubmit={onLogin}>
      <h2>Login</h2>
      <div class="input-box">
        <span class="icon">
          <ion-icon name="mail"></ion-icon>
        </span>
        <input onChange={onChangeHandler} type="text" name="username" value={data.username} required/>
        <label>User Name</label>
      </div>
      <div class="input-box">
        <span class="icon">
          <ion-icon name="lock-closed"></ion-icon>
        </span>
        <input onChange={onChangeHandler} value={data.password} type="password" name="password" required/>
        <label>Password</label>
      </div>
    
      <button type="submit">Login</button>
     
    </form>
  </div>
</div>
    </>
  );
};

export default Login;
