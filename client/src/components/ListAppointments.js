import React,{ Fragment, useEffect, useState } from "react";

import EditAppointment from "./EditAppointment";

const ListAppointments = () => {
return <h1> List Appointments</h1>;
};


const [Appointments, setAppointments] = useState([]);

//delete Appointment function
const deleteAppointment = async (id) =>{
try {
  const deleteAppointment = await fetch('http://localhost:3001/Appointments/${id}',{
    method: "DELETE"
  });

  setAppointments(Appointments.filter(Appointment => Appointment.id !== id));

} catch (err) {
  console.error(err.message)
}
}

  const getAppointments = async()=>{
    try {

      const response =await fetch("http://localhost:3001/Appointments");
      const jsonData= await response.json();
      setAppointments(jsonData)
      
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getAppointments();
  },[]);

  console.log(Appointments)



    return (
    <Fragment>
      {" "}
       <table class="table mt-5 text center">
    <thead>
      <tr>
        <th>Employee ID</th>
        <th>First Name</th>
        <th>Last name</th>
        <th>Phone</th>
        <th>Adress</th>
        <th>Email</th>
        <th>Date of Birth</th>
        <th>Speciality</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      {employee.map(employee =>(
        <tr key={employee.id}> 
          <td>{Appointments.description} </td>
          <td>
             <EditAppointment Appointments={Appointments}/>
          </td>
          <td>
            <button className="btn btn-danger" 
          onClick={()=>deleteAppointment(Appointments.id)}>Delete</button></td>
        </tr>
      ))}
      
    </tbody>
  </table>
  </Fragment>
);

export default ListAppointments;







    

