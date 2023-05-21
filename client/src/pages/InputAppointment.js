import React, {Fragment,useState} from "react";
import "./InputEmployeeStyling.css";


const InputAppointment = () => {

  
    const[f_name, setf_name] = useState("");
    const[l_name, setl_name] = useState("");
    const[date, setdate] = useState("");
    const[time, settime] = useState("");
    const[status, setstatus] = useState("");
 

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {  f_name, l_name, date, time, status };
            const response = await fetch("http://localhost:3001/inputappointment",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            
        } catch (err) {
            console.error(err.message);  
        }
    }

    return (
         <Fragment>
                <div>
                <h1><u><p class="text-center">List Of Appointments.</p></u></h1>

                <form className="d-flex mt-5 " onSubmit={onSubmitForm}>
                <div className="form-group">
                <div >
                    <h5>Enter first name:</h5>
                    <input type="text" className="form-control" value={f_name}
                     onChange={e =>setf_name(e.target.value)}/>
                                      
                    <h5>Enter last name:</h5>
                    <input type="text" className="form-control" value={l_name}
                     onChange={e =>setl_name(e.target.value)}/>
                    
                    <h5>Enter Date:</h5>
                    <input type="text" className="form-control" value={date}
                     onChange={e =>setdate(e.target.value)}/>
                    
                    <h5>Enter Time:</h5>
                    <input type="text" className="form-control" value={time}
                     onChange={e =>settime(e.target.value)}/>
                   

                    <h5>Enter Status:</h5>
                    <input type="text" className="form-control" value={status}
                     onChange={e =>setstatus(e.target.value)}/>
                    
        
                     <h5>           </h5>
                     
                    </div>
                    <p><button className="btn btn-success btn-sm">Add</button></p>
                    </div>
                </form>
                </div>
            </Fragment>

    );
};



export default InputAppointment;
