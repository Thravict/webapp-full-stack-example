//Logo
import Header from "../assets/images/ProfileHeader.jpg";
import Pic from "../assets/images/ProfilePic.png";

const ProfileHeader = () => {

    return (
        <div
        style={{
            width:"100%",
            height:"150px",
            backgroundImage: `url(${Header})`
        }}> 
            <img 
            src={Pic}
            style={{
                width:"100px",
                height:"130px",
                margin:"70px"
            }}>
            </img>
        </div>
    )
}

export default ProfileHeader;