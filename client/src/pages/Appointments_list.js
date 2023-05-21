import React,{ Fragment , useEffect,useState} from "react";

const ListAppointments= () => {
    const[appointments,setAppointments]=useState([])
    const getAppointments=async () => {
        try {
            const response = await fetch("http://localhost:3001/user_appointments_data");
            const jsonData= await response.json();
            setAppointments(jsonData);
        }
        catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getAppointments();
    },[]);

    console.log(appointments)

    
    return <fragment>
        <div>
        <h1> List Of Appointments</h1>
         <table class="table mt-2 text-center">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Date</th>
        <th>Time</th>
        <th>Email</th>
        <th>Status</th>
  
      </tr>
    </thead>
    <tbody>
        {/*  <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      */}
      {appointments.map(appointment =>(
            <tr>
                <td>{appointment.f_name}</td>
                <td>{appointment.l_name}</td>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.status}</td>
            </tr>
        ))}
   
      
    </tbody>
  </table></div></fragment>;
};

export default ListAppointments;


    
