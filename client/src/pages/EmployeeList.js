import React,{ Fragment , useEffect,useState} from "react";

const ListEmployees= () => {
    const[employees,setEmployees]=useState([])
    const getEmployees=async () => {
        try {
            const response = await fetch("http://localhost:3001/user_employee_data");
            const jsonData= await response.json();
            setEmployees(jsonData);
        }
        catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getEmployees();
    },[]);

    console.log(employees)

    
    return <fragment>
        <div>
        <h1> List Of Barbers</h1>
         <table class="table mt-2 text-center">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Phone</th>
        <th>Adress</th>
      </tr>
    </thead>
    <tbody>
        {/*  <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      */}
      {employees.map(employee =>(
            <tr>
                <td>{employee.f_name}</td>
                <td>{employee.l_name}</td>
                <td>{employee.phone}</td>
                <td>{employee.adress}</td>
            </tr>
        ))}
   
      
    </tbody>
  </table></div></fragment>;
};

export default ListEmployees;


    
