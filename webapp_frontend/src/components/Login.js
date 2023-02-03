//React Hooks
import {useState} from "react";
// Routing
import {Link} from "react-router-dom";
//Imported components
import { applicantExistence } from "./ApiCalls/Applicant";
//CSS File
import "./Login.css"
//Logo Banner
import Logo from "./Logo";
//Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        applicantExistence(email);
    }


    return (
        <body>
        <Logo></Logo>
        <div className="Login-container">
            <div className="Login-head">
                <h1>Please enter your credentials</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <FontAwesomeIcon icon={faAt}/>&nbsp;
                    <input className="email-field" type="email" autoComplete="on" placeholder="Email Adress" id="email"
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="password">
                    <FontAwesomeIcon icon={faKey}/>&nbsp;
                    <input className="password-field" type="password" placeholder="Password" id="password"
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="Submit-btn">
                    <input type="submit" className="Submit-btn-text" value="Login"></input>
                    <p>{error}</p>
                </div>
                <div className="Signup-link">
                    <p>Don´t have an account?{" "}
                        <Link to="/signup">Sign up</Link>
                    </p>
                </div>
            </form>
        </div>
        </body>
    )
}
export default Login;