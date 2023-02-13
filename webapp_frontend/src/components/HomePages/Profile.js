import "./Profile.css"
//Logo Banner
import Logo from "../Logo";
import Navbar from "./Navbar";
import ProfileHeader from "./ProfileHeader";

function Profile() {

    return (
        <body>
        <div>
        <Logo></Logo>
        <Navbar></Navbar>
        </div>
        <div>
        <ProfileHeader></ProfileHeader>
        </div>
        <div className="Profile-Info">
            POSTS
        </div>
        </body>
    )
}

export default Profile;