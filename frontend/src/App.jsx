import React from "react";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import CreateEmp from "./components/CreateEmp/CreateEmp";
import { Navbar } from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div>
   <Dashboard/>
    </div>
  );
};

export default App;
