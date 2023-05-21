import React, { Fragment } from "react";
import Navbar from "../Navbar_doctor";
import InputEmployee from "./InputEmployee";
import Appointments from "./Appointments_list";
import { Route , Routes }from "react-router-dom"


function Employee () {
    return (
    <>
    <Navbar />
    <div className="container">
        <Routes>
          <Route path="/Employees" element={<InputEmployee />} />
        </Routes>
    </div>
    </>
    )
}
export default Employee;



 