//Logo
import Background from "../assets/images/ProfileHeader.jpg";
import Pic from "../assets/images/ProfilePic.png";

const ProfileHeader = () => {

    return ( 
        <div
        style={{
             width:"800px",
            position:"center",
            height:"450px",
            margin:"200px",
            backgroundColor:"white",
            borderRadius:"20px",
        }}>
            <img 
            src={Pic}
            style={{
                width:"120px",
                height:"150px",
                margin:"-95px",
                position:"absolute",
            }}>
            </img>
            </div>
    )
}

export default ProfileHeader;