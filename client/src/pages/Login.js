import React, {Fragment,useState} from "react";
import InputAppointment from "./InputAppointment";
import "./login.css"
const Login = () => {
    
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { username, password };
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            if (response.status === 200) {
                console.log("Login success dear Doctor!");
                window.location.href = "/DoctorsMain";
            }
            else if (response.status === 401) {
                console.log("Login success dear Patient!");
                window.location.href = "/InputAppointment";
            }
            else {
                console.log("Login failed!");
                window.location = "/login";
            }
        } catch (err) {
            console.error(err.message);
        }
    }
    return (    
        <Fragment>
            <div>
                <h1><u><p class="text-center">Login.</p></u></h1>

                <form className="d-flex mt-5 " onSubmit={onSubmitForm}>
                <div className="form-group">
                <div >
                    <h5>Enter Username:</h5>
                    <input type="text" className="form-control" value={username}
                     onChange={e =>setusername(e.target.value)}/>
                                      
                    <h5>Enter Password:</h5>
                    <input type="text" className="form-control" value={password}
                     onChange={e =>setpassword(e.target.value)}/>
                </div>
                </div>
                <button className="btn btn-success">Login</button>
                </form>
            </div>
        </Fragment>
    );
};

export default Login;