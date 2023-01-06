import classes from "./Login.module.css";

function Login() {
  return (
    <body>
        <div className="Login-container">
            <div className="Login-Head">
                <h1>Login</h1>
                <p>Please enter your Username and Password</p>
                </div>  
            <div className="Login-Form">
                <div className="E-Mail-Field">
                    <h5>E-Mail: </h5>
                    <img></img>
                    <input type="email" name="email" placeholder="example@email.com" />
                </div>
                <div className="Password-Field">
                    <h5>Password: </h5>
                    <img></img>
                    <input type="password" name="password"/>
                </div>
            </div>
        </div>
        
    </body>
  );
}

export default Login;