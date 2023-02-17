//React Hooks
import {useState} from "react";
// Routing
import {Link, useNavigate} from "react-router-dom";
//CSS File
import "./Login.css"
//Footer
import Footer from "../Footer"
//Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faKey} from "@fortawesome/free-solid-svg-icons";

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const URL = "api/v1/applicant/register";

    const navigate = useNavigate();
    function CheckApplicant() {

            fetch(URL + "/" +  email, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.text())
            .then(text => {
                if (text === "true") {
                    alert("Login successful");
                    navigate(`/home`)
                } else {
                    alert("Wrong E-Mail");
                }
            });
        
        }
    const handleSubmit = (e) => {
        e.preventDefault();
        CheckApplicant(email)
    }


    return (
        <body>
        <div className="Login-container">
            <div className="Login-head">
                <h1>WELCOME TO JAMETO!</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <FontAwesomeIcon icon={faAt}/>&nbsp;
                    <input 
                    className="email-field" 
                    type="text" 
                    autoComplete="on" 
                    placeholder="Email Adress" 
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password">
                    <FontAwesomeIcon icon={faKey}/>&nbsp;
                    <input 
                    className="password-field" 
                    type="password" 
                    placeholder="Password" 
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button>
                    <span>LOGIN </span><i></i>
                </button>
                <div className="Signup-link">
                    <p>
                    Don´t have an account?{" "}
                    <Link 
                    to="/signup">
                    Sign up
                    </Link>
                    </p>
                </div>
            </form>
        </div>
        <Footer></Footer>
        </body>
    )
}
export default Login;