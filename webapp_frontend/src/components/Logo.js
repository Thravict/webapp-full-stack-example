//Logo
import Jameto from "./assets/images/Jameto.png";


const Logo = () => {

    return (
        <h2>
            <img 
            src={Jameto}
            style={{
                width:"180px",
                height:"55px", 
                marginRight:"190px",           
            }}>
            </img>
        </h2>
    )
}

export default Logo;