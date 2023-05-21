import {Link} from "react-router-dom"
export default function Navbar_doctor(){


    return (
    <nav className="nav">
        <a href="/" className="site-title">Smily Teeth</a>
        <ul>
            <li>
                <a href="/InputDoctor">Add Doctor</a>
            </li>
            <li>
                <a href="/DoctorList">List Of Doctors</a>
            </li>
            <li>
                <a href="/Patients_list">List Of Patients</a>
            </li>
            <li>
                <a href="/Appointments_list">List Of Appointments</a>
            </li>
            <li>
                <a href="/InputAppointment">Add Appointment</a>
            </li>

            <li>
                <a href="/InputPatient">Add Patient</a>
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