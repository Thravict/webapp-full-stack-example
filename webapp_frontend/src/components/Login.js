import { useState } from "react";
import "./Login.css"
import Signin from "./Signin";

function Login() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (email !== )
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
            <input className="email-field" type="email" autocomplete="on" placeholder="Email Adress" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password">
            <input className="password-field" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="Submit-btn">
              <input className="Submit-btn-text" type="submit">
                <span>Login</span>
              </input>
              <p>{error}</p>
            </div>
            <div className="Signup-link">
            <p>Not a member yet? 
            <a href="/signin">Create an account</a></p>
            </div>
            </form>
          </div>
        </body>
    </html>
)
}

export default Login;