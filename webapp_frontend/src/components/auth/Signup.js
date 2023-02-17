//React Hooks
import {useState} from "react";
//Routing
import {Link, useNavigate} from "react-router-dom";
//Imported components
import {addApplicant} from "../ApiCalls/addApplicant";
//CSS
import "./Signup.css"
//Footer
import Footer from "../Footer"
//Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faKey, faCircleCheck} from "@fortawesome/free-solid-svg-icons";

function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();
    const URL = "api/v1/applicant/register";

    async function CheckApplicant(email) {

            await fetch(URL + "/" +  email, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.status === 500) {
                    alert("E-Mail is already is use!");
                    
                } else {
                    return
                }
            });
        }

    const register = (e) => {
        /* prevent page refresh */
        e.preventDefault();
        CheckApplicant(email);
        if ((email && password && confirmPassword !== "") && password == confirmPassword ) {
            addApplicant(email, password);
            alert("Account has been created")
            alert("You will be redirected to Login")
            navigate('/login');
        } else if (password !== confirmPassword){
            alert("Passwords do not match!")
        } else {
            alert("Enter your credentials!")
        }};

    return (
        <body>
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
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="password">
                <FontAwesomeIcon icon={faCircleCheck}/>&nbsp;
                    <input 
                    className="password-field" 
                    type="password" 
                    autoComplete="on" 
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button onClick={register}>
                    <span>SIGNUP </span><i></i>
                </button>
                <div className="Login-link">
                    <p>Already a member?{" "}
                        <Link 
                        to="/Login">
                        Go to Login
                        </Link>
                    </p>
                </div>
            </form>
        </div>
        <Footer></Footer>
        </body>
    )
}

export default Signup;