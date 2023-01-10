import "./Login.css"

function Login() {
    
	return(
	<html>
        <body>
            <div className="Login-container">
                <div className="Login-head">
                    <h1>Login</h1>
                </div>
                <div className="Login-form">
                    <div className="username-field">
                        <input type="email" className="username" placeholder="example@gmail.com"></input>
                    </div>
                    <div className="password-field">
                        <input type="password" className="password"></input>
                    </div>
                </div>
                <div className="Login-btn">

                </div>
            </div>
        </body>
    </html>
)
}

export default Login;