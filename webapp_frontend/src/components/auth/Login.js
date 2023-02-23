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

    const urls = [
        "api/v1/applicant/register/mail/" + email,
        "api/v1/applicant/register/cred/" + email + "/" + password,
    ]

    const navigate = useNavigate();
    let checkUser = []
    const CheckApplicant = async () => {
        try {
            const response = await Promise.all(
                urls.map(url => fetch (url)
                .then(res => res.text())
                .then(text => {
                    checkUser.push(text)
                    console.log(checkUser)
                    if (checkUser[0] === "true" && checkUser[1] === "true") {
                        alert("Login successful")
                        navigate('/home')
                    } else {
                        alert("Wrong credentials")
                    }
                })
                ))
            console.log(response)
        } catch (error) {
            console.log("Error", error)
        }}

    const handleSubmit = (e) => {
        e.preventDefault();
        CheckApplicant()
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