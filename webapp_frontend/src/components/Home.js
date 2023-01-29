import {Link} from "react-router-dom";
import "./Home.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faCircleUser, faGear, faBars, faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
//Logo Banner
import Logo from "./Logo";

function Home() {

    return (
        <body>
        <Logo></Logo>
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
    )
}

export default Home;