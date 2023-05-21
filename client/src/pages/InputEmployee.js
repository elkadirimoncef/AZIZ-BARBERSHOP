import React, {Fragment,useState} from "react";
import "./InputEmployeeStyling.css";


const InputEmployee = () => {

  
    const[f_name, setf_name] = useState("");
    const[l_name, setl_name] = useState("");
    const[phone, setphone] = useState("");
    const[adress, setadress] = useState("");

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {  f_name, l_name, phone, adres };
            const response = await fetch("http://localhost:3001/inputemployee",{
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
                <h1><u><p class="text-center">Add New employee</p></u></h1>

                <form className="d-flex mt-5 " onSubmit={onSubmitForm}>
                <div className="form-group">
                <div >
                    <h5>Enter first name:</h5>
                    <input type="text" className="form-control" value={f_name}
                     onChange={e =>setf_name(e.target.value)}/>
                                      
                    <h5>Enter last name:</h5>
                    <input type="text" className="form-control" value={l_name}
                     onChange={e =>setl_name(e.target.value)}/>
                    
                    <h5>Enter phone:</h5>
                    <input type="text" className="form-control" value={phone}
                     onChange={e =>setphone(e.target.value)}/>
                    
                    <h5>Enter adress:</h5>
                    <input type="text" className="form-control" value={adress}
                     onChange={e =>setadress(e.target.value)}/>
                  
                    </div>
                    <p><button className="btn btn-success btn-sm">Add</button></p>
                    </div>
                </form>
                </div>
            </Fragment>

    );
};



export default InputEmployee;
