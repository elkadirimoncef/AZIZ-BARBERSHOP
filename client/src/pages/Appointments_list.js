import React,{ Fragment , useEffect,useState} from "react";

const ListTodos= () => {
    const[todos,setTodos]=useState([])
    const getTodos=async () => {
        try {
            const response = await fetch("http://localhost:3001/user_appointments_data");
            const jsonData= await response.json();
            setTodos(jsonData);
        }
        catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getTodos();
    },[]);

    console.log(todos)

    
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
      {todos.map(todo =>(
            <tr>
                <td>{todo.f_name}</td>
                <td>{todo.l_name}</td>
                <td>{todo.date}</td>
                <td>{todo.time}</td>
                <td>{todo.status}</td>
            </tr>
        ))}
   
      
    </tbody>
  </table></div></fragment>;
};

export default ListTodos;


    