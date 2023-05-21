import {Link} from "react-router-dom"
export default function Navbar_home(){


    return (
    <nav className="nav">
        <a href="/" className="site-title">Site Name</a>
        <ul>
            <li>
                <a href="/Login">Login</a>
            </li>
            <li>
                <a href="/Sign Up">Sign Up</a>
            </li>
           
            <li>
                <a href="/DoctorsMain">Doctors Main</a>
            </li>
            <li>
                <a href="/Appointments_list">Appointments List</a>
            </li>
            <li>
                <a href="/Patients_list">Patients List</a>
            </li>

            <li>
                <a href="/InputPatient">Input Patient</a>
            </li>
            <li>
                <a href="/InputAppointment">Input Appointment</a>
            </li>
        </ul>

    </nav>
    )
}

function CustomLink({href,children, ...props}){
    const path = window.location.pathname;

        props.className = "active"
    
    return (
        <li className={path===href?"active":""}>
                <a href={href}{...props}>{children}</a>
        </li>

    )

}