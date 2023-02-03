import {useState} from "react";

import {Link, useNavigate} from "react-router-dom";

import {addApplicant} from "./ApiCalls/Applicant";

import "./Signup.css"

import Logo from "./Logo";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toLogin, setLogin] = useState(false);

    const navigate = useNavigate();

    const register = (e) => {
        /* prevent page refresh */
        e.preventDefault();
        addApplicant(email, password);
        setLogin (true);
        /* navigate('/login') */
        };

    if (toLogin === true) {
        navigate('/login');
    }

    return (
        <body>
         <Logo></Logo>
         <div className="Signup-container">
            <div className="Signup-head">
                <h1>Account Creation</h1>
            </div>
            <form>
                <div className="email">
                <FontAwesomeIcon icon={faAt}/>&nbsp;
                    <input 
                    className="email-field" 
                    type="text"
                    autoComplete="on" 
                    placeholder="Email Adress" 
                    id="email"
                    value={email}
                    required
                    /* Event handler: cache input */
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password">
                <FontAwesomeIcon icon={faKey} />&nbsp;
                    <input 
                    className="password-field" 
                    type="password" 
                    autoComplete="on" 
                    placeholder="Password" 
                    id="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="password">
                <FontAwesomeIcon icon={faKey} />&nbsp;
                    <input 
                    className="password-field" 
                    type="password" 
                    autoComplete="on" 
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    required 
                    />
                </div>
                <div className="Submit-btn">
                    <button 
                    onClick={register}
                    className="Submit-btn-text"> 
                    SIGN UP
                    </button>
                </div>
                <div className="Signup-link">
                    <p>Already a member?{" "}
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