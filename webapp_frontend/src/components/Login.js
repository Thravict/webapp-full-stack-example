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
            <label for="Email Address" className="email-label">Email Address</label>
            <input className="email-field" type="email" autocomplete="on"></input>
            </div>
            <div className="password">
            <label for="Password" className="password-label">Password</label>
            <input className="password-field" type="password"></input>
            </div>
            <div className="Submit-btn">
              <button className="Submit-btn">
                <span>Login</span>
              </button>
            </div>
            </form>
          </div>
        </body>
    </html>
)
}

export default Login;