import React, { Fragment } from "react";
import Navbar from "../Navbar_home";
import InputEmployee from "./InputEmployee";
import Login from "./Login";
import Employee from "./Employee";
import EmployeeMain from "./EmployeeMain";
import { Route , Routes }from "react-router-dom"
import Appointments_list from "./Appointments_list";



//components


//import ListTodos from "./components/ListTodos";

function Home() {
  
    return (
    <>
    <Navbar />
    <div className="container">
        <Routes>
          <Route path="/InputEmployee" element={<InputEmployee />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/EmployeeMain" element={<EmployeeMain/>} />
          <Route path="/Appointments_list" element={<Appointments_list/>} />
        </Routes>
    </div>
    </>
    )
}

export default Home;