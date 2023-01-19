import { useState } from "react";
import {Link} from "react-router-dom";
import "./Login.css"

function Login() {

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
          <h1 className="Login-title">Welcome to the Game Pass Portal</h1>
          <div className="Login-container">
            
            <div className="Login-head">
              <h1>Please enter your credentials</h1>
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
            <p>Not a member yet?
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