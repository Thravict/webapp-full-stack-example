import {useState} from "react";

import {Link} from "react-router-dom";

import {addApplicant} from "./ApiCalls/Applicant";

import "./Signup.css"

import Logo from "./Logo";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = (e) => {
        e.preventDefault();
        addApplicant(
            email, 
            password
            );
     }; 

    return (
        <body>
         <Logo></Logo>
         <div className="Signup-container">
            <div className="Signup-head">
                <h1>Account Creation</h1>
            </div>
            <form onSubmit={register}>
                <div className="email">
                <FontAwesomeIcon icon={faAt}/>&nbsp;
                    <input 
                    className="email-field" 
                    type="text"
                    autoComplete="on" 
                    placeholder="Email Adress" 
                    id="email"
                    /* Event handler: cache input */
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
                    />
                </div>
                <div className="Submit-btn">
                    <button  
                    className="Submit-btn-text"> 
                    Signup
                    </button>
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