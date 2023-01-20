import { useState } from "react";
import Popup from 'react-popup';
import {Link} from "react-router-dom";
import "./Signup.css"

function Signup() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [error, setError] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
    Popup.alert("Passwords do not match!")
    return
  }
  console.log('email',email)
  console.log('password',password)
  }

	return(
	<html>
        <body>
          <h1 className="Signup-title">JAMETO</h1>
          <div className="Signup-container">
            
            <div className="Signup-head">
              <h1>Account Creation</h1>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="email">
            <input className="email-field" type="email" autocomplete="on" placeholder="Email Adress" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password">
            <input className="password-field" type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="password">
            <input className="password-field" type="password" placeholder="Confirm Password" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div className="Submit-btn">
                <input type="submit" className="Submit-btn-text" value="Signup" ></input>
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