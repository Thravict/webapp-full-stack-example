import {Link} from "react-router-dom";
import "./Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Logo from "./assets/images/Jameto.jpg";

function Home() {

	return(
    <html>
      <body>
      <h2 className="head"><img src={Logo} className="logo"></img></h2>
        <ul className="navbar">
          <li className="navbar-list-home" ><Link to="/home"><i class={faHome}></i>Home</Link></li>
          <li className="navbar-list-profile"><Link to="/profile">Profile</Link></li>
          <li className="navbar-list-dashboard"><Link to="/dashboard">Dashboard</Link></li>
          <li className="navbar-list-settings"><Link to="/settings">Settings</Link></li>
          <li className="navbar-list-logout"><Link to="/login">Logout</Link></li>
        </ul>
      
        </body>
        </html>

)
}

export default Home;