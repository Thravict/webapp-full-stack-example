import {Link} from "react-router-dom";
import "./Home.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faCircleUser, faGear, faBars, faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import Logo from "./assets/images/Jameto.jpg";

function Home() {

    return (
        <html>
        <body>
        <h2 className="head"><img src={Logo} className="logo"></img></h2>
        <ul className="navbar">
            <li className="navbar-list-home">
            <Link to="/home">
            <FontAwesomeIcon icon={faHome} />&nbsp;
            Home
            </Link>
            </li>
            <li className="navbar-list-profile">
            <Link to="/profile">
            <FontAwesomeIcon icon={faCircleUser} />&nbsp;
            Profile
            </Link>
            </li>
            <li className="navbar-list-dashboard">
            <Link to="/dashboard">
            <FontAwesomeIcon icon={faBars} />&nbsp;
            Dashboard
            </Link>
            </li>
            <li className="navbar-list-settings">
            <Link to="/settings">
            <FontAwesomeIcon icon={faGear} />&nbsp;
            Settings
            </Link>
            </li>
            <li className="navbar-list-logout">
            <Link to="/login">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />&nbsp;
            Logout
            </Link>
            </li>
        </ul>

        </body>
        </html>

    )
}

export default Home;