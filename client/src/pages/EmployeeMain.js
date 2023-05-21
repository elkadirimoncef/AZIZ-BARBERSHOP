import React, {Fragment,useState} from "react";
import Navbar from "../Navbar_doctor";
import InputEmployee from "./InputEmployee";
import EmployeeList from "./EmployeeList";
import Appointments_list from "./Appointments_list";
import Inputappointment from "./InputAppointment";
import { Route , Routes }from "react-router-dom"

import "./login.css"

function EmployeeMain() {
  
    return (
    <>
    <Navbar />
    <div className="container">
        <Routes>
          <Route path="/EmployeeList" element={<EmployeeList />} />
          <Route path="/InputEmployee" element={<InputEmployee/>} />
          <Route path="/Appointments_list" element={<Appointments_list/>} />
        <Route path="/Inputappointment" element={<Inputappointment/>} />
        </Routes>
    </div>
    </>
    )
}

export default EmployeeMain;