import "./Login.css"


function Login() {
    
	return(
	<html>
        <body>
          <div className="Login-container">
            <div className="Login-head">
              <h1>Login</h1>
            </div>
            <form action="#">
            <div className="username">
            <label>Email Address</label>
            <input type="text"></input>
            </div>
            <div className="password">

            </div>
            <div className="Submit-btn">
              <input type="submit" value="Submit"></input>
            </div>
            </form>
          </div>
        </body>
    </html>
)
}

export default Login;