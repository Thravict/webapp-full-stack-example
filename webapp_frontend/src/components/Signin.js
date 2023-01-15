import "./Signin.css"
import { Link } from "react-router-dom";


function Signin() {
    
	return(
	<html>
        <body>
          <h1 className="Signin-title">You are one step away from creating your Account</h1>
          <div className="Signin-container">
            
            <div className="Signin-head">
              <h1>Please create your Account</h1>
            </div>
            <form action="#">
            <div className="email">
            <label for="Email Address" className="email-label">Email Address</label>
            <input className="email-field" type="email" autocomplete="on" placeholder="example@mail.com"></input>
            </div>
            <div className="password">
            <label for="Password" className="password-label">Password</label>
            <input className="password-field" type="password"></input>
            </div>
            <div className="Submit-btn">
              <button className="Submit-btn-text">
                <span>Create Account</span>
              </button>
            </div>
            </form>
          </div>
        </body>
    </html>
)
}

export default Signin;