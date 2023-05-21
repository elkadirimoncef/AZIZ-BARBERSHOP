import {Link} from "react-router-dom"
export default function Navbar_employee(){


    return (
    <nav className="nav">
        <a href="/" className="site-title">Welcome Admin</a>
        <ul>
            <li>
                <a href="/InputDoctor">Doctors</a>
            </li>
            <li>
                <a href="/Patients">Patients</a>
            </li>
            <li>
                <a href="/Appointments">Appointments</a>
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