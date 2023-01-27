import {useState} from "react";
import {Link} from "react-router-dom";
import {applicantExists} from "./ApiCalls/Applicant";
import "./Login.css"
import Logo from "./assets/images/Jameto.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)

    const handleSubmit = (e, applicantEmail) => {
        e.preventDefault()
        const exists = applicantExists(applicantEmail)
        if (exists) {
        } else {
            alert("Applicant doesnt exist")
            setError("make sure account exists!");
            return error;
        }
    }

    return (
        <html>
        <body>
        <h2 className="head"><img src={Logo} className="logo"></img></h2>
        <h1 className="Login-title"></h1>
        <div className="Login-container">

            <div className="Login-head">
                <h1>Please enter your credentials</h1>
            </div>
            <form onSubmit={() => handleSubmit("", email)}>
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
                    <p>Not a member yet?&nbsp;&nbsp;
                        <Link to="/signup">Create an Account</Link>
                    </p>
                </div>
            </form>
        </div>
        </body>
        </html>
    )
}

export default Login;