//Logo
import Jameto from "./assets/images/Jameto.jpg";


const Logo = () => {

    return (
        <h2 
        style={{
            backgroundColor:"white"
        }}>
            <img 
            src={Jameto}
            style={{
                width:"200px",
                height:"100px"
            }}>
            </img>
        </h2>
    )
}

export default Logo;