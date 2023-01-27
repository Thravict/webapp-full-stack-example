//React Hooks
import {useState} from "react";
//Routing
import {Link} from "react-router-dom";
//Imported components
import {addApplicant} from "./ApiCalls/Applicant";
//CSS File
import "./Signup.css"
//Logo Banner
import Logo from "./assets/images/Jameto.jpg";
//Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";

function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const submit = (e) => {
        e.preventDefault(addApplicant)
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


    }

    return (
        <body>
         <h2 className="head">
            <img src={Logo} className="logo">
            </img>
         </h2>
         <div className="Signup-container">
            <div className="Signup-head">
                <h1>Account Creation</h1>
            </div>
            <form onSubmit={submit}>
                <div className="email">
                <FontAwesomeIcon icon={faAt}/>&nbsp;
                    <input 
                    className="email-field" 
                    autoComplete="on" 
                    placeholder="Email Adress" 
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password">
                <FontAwesomeIcon icon={faKey} />&nbsp;
                    <input 
                    className="password-field" 
                    type="password" 
                    placeholder="Password" 
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="password">
                <FontAwesomeIcon icon={faKey} />&nbsp;
                    <input 
                    className="password-field" 
                    type="password" 
                    placeholder="Confirm Password"
                    id="confirmPassword" 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className="Submit-btn">
                    <input 
                    type="submit" 
                    className="Submit-btn-text" 
                    value="Signup"
                    />
                </div>
                <div className="Signup-link">
                    <p>Already a member?&nbsp;&nbsp;
                        <Link 
                        to="/Login">
                        Go to Login
                        </Link>
                    </p>
                </div>
            </form>
        </div>
        </body>
    )
}

export default Signup;