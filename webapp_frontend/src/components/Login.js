import {useState} from "react";
import {Link} from "react-router-dom";
import "./Login.css"
import Logo from "./assets/images/Jameto.jpg";

function Login() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState(null)
    const [error, setError] = useState(false)
    const URL = "http://localhost:8080/api/v1/applicant/register/";
    const emailAlreadyExists = async (Email) => {
        return await fetch(`${URL}${Email}`, {method: 'POST', mode: 'no-cors'});
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (() => !emailAlreadyExists(email)) {
            alert("HAAAAALT STOP")
            setError("make sure account exists!");
            return error;
        }
        console.log('email', email)
        console.log('password', password)
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
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <input className="email-field" type="email" autoComplete="on" placeholder="Email Adress" id="email"
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="password">
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