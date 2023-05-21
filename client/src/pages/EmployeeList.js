import React,{ Fragment , useEffect,useState} from "react";

const ListTodos= () => {
    const[todos,setTodos]=useState([])
    const getTodos=async () => {
        try {
            const response = await fetch("http://localhost:3001/user_employee_data");
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
        <h1> List Of Barbers</h1>
         <table class="table mt-2 text-center">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Phone</th>
        <th>Adress</th>
        <th>Email</th>
        <th>Date of Birth</th>
        <th>Speciality</th>
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
                <td>{todo.phone}</td>
                <td>{todo.adress}</td>
                <td>{todo.email}</td>
                <td>{todo.dob}</td>
                <td>{todo.speciality}</td>
            </tr>
        ))}
   
      
    </tbody>
  </table></div></fragment>;
};

export default ListTodos;


    