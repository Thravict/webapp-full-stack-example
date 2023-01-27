import {useState} from "react";
import {addApplicant} from "./ApiCalls/Applicant";
import {Link} from "react-router-dom";
import "./Signup.css"
import Logo from "./assets/images/Jameto.jpg";
import validator from "validator";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";

function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email == "" || password == "" || confirmPassword == "") {
            alert("Registration incomplete!")
            return
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match!")
            return
        }
        else {
            alert("Thank you for registering!")
            return
        }
        console.log('email', email)
        console.log('password', password)

    }

    return (
        <html>
        <body>
        <h2 className="head"><img src={Logo} className="logo"></img></h2>
        <div className="Signup-container">
            <div className="Signup-head">
                <h1>Account Creation</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="email">
                <FontAwesomeIcon icon={faAt} />&nbsp;
                    <input className="email-field" autoComplete="on" placeholder="Email Adress" id="email"
                           onChange={(e) => validateEmail(e) && setEmail(e.target.value)}/>
                    <p className="email-error">{error}</p>
                </div>
                <div className="password">
                <FontAwesomeIcon icon={faKey} />&nbsp;
                    <input className="password-field" type="password" placeholder="Password" id="password"
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="password">
                <FontAwesomeIcon icon={faKey} />&nbsp;
                    <input className="password-field" type="password" placeholder="Confirm Password"
                           id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <div className="Submit-btn">
                    <input type="submit" className="Submit-btn-text" value="Signup"></input>
                    <p>{}</p>
                </div>
                <div className="Signup-link">
                    <p>Already a member?&nbsp;&nbsp;
                        <Link to="/Login">Go to Login</Link>
                    </p>
                </div>
            </form>
        </div>
        </body>
        </html>
    )
}

export default Signup;