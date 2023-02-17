import "./Profile.css"
//Logo Banner
import Navbar from "./Navbar";
import ProfileHeader from "./ProfileHeader";
//Footer
import Footer from "../Footer"

function Profile() {

    return (
        <body>
        <div>
        <Navbar></Navbar>
        </div>
        <div>
        <ProfileHeader></ProfileHeader>
        </div>
        <div className="Profile-Info">
            <div className="Profile-Stats">
                    <li className="Posts">
                    <p>3</p>
                    Posts
                    </li>
                    {" "}
                    <li className="Likes">
                    <p>3</p>
                    Likes
                    </li>
                    {" "}
                    <li className="Follower">
                    <p>3</p>
                    Followers
                    </li>
                    {" "}
            </div>
        </div>
        
        <div className="AboutMe">
            <span className="AboutTitle">About me</span>
            <p>IT Student</p>
            <p>Gaming</p>
            <p>Living in Germany</p>
        </div>
        <Footer></Footer>
        </body>
    )
}

export default Profile;