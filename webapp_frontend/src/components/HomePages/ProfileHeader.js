//Logo
import Background from "../assets/images/ProfileHeader.jpg";
import Pic from "../assets/images/ProfilePic.png";

const ProfileHeader = () => {

    return (
        <div
        style={{
            width:"100%",
            height:"500px",
            backgroundImage: `url(${Background})`,
            margin:"0px",
            padding:"0px",
            justifyContent:"center"
        }}> 
        <div
        style={{
            width:"650px",
            position:"absolute",
            height:"150px",
            marginTop:"270px",
            marginLeft:"300px",
            backgroundColor:"white",
            borderRadius:"20px",
        }}> 
            <img 
            src={Pic}
            style={{
                width:"130px",
                height:"150px",
                marginLeft:"-390px",
                position:"absolute",
            }}>
            </img>
            <span
            style={{
                color:"grey",
                fontSize:"25px",
            }}>
            <p>&nbsp;</p>
            <p><i>"If people were influenced by video games,</i></p> 
            <p><i>then majority of Facebook users</i></p>
            <p><i>would be farmers by now."</i></p>
            </span>
            </div>
        </div>
    )
}

export default ProfileHeader;