import "./Logo.css"
import logo from "./assets/images/Jameto.jpg";

function Logo() {

	return(
    <html>
      <body>
        <div className="head">
          <h2><img src={logo} className="logo"></img></h2>
        </div>
        </body>
        </html>
)
}

export default Logo;