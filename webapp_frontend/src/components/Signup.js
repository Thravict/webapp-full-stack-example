import { useState } from "react";
import {Link} from "react-router-dom";
import "./Signup.css"

function Signup() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    //if (email !== Database entry) {
    // setError (make sure account exists!)
    //return
  //}
  console.log('email',email)
  console.log('password',password)
  }

	return(
	<html>
        <body>
          <h1 className="Login-title">CREATE YOUR ACCOUNT</h1>
          <div className="Login-container">
            
            <div className="Login-head">
              <h1>Account Creation</h1>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="email">
            <input className="email-field" type="email" autocomplete="on" placeholder="Email Adress" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password">
            <input className="password-field" type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="Submit-btn">
                <input type="submit" className="Submit-btn-text" value="Login" ></input>
                <p>{error}</p>
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