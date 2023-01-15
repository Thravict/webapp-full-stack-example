import { Link } from "react-router-dom";
import "./Login.css"


function Login() {
    
	return(
	<html>
        <body>
          <h1 className="Login-title">Welcome to the Game Pass Portal</h1>
          <div className="Login-container">
            
            <div className="Login-head">
              <h1>Please enter your credentials</h1>
            </div>
            <form action="#">
            <div className="email">
            <input className="email-field" type="email" autocomplete="on" placeholder="Email Adress"></input>
            </div>
            <div className="password">
            <input className="password-field" type="password" placeholder="Password"></input>
            </div>
            <div className="Submit-btn">
              <button className="Submit-btn-text">
                <span>Login</span>
              </button>
            </div>
            <div className="Signup-link">
            <p>Not a member yet? 
            <Link to="/signin">Create an account</Link></p>
            </div>
            </form>
          </div>
        </body>
    </html>
)
}

export default Login;