import Profile from "../../components/profile/profile.component";
import Overview from "../../components/overview/overview.component";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import './profile.styles.css'

const ProfilePage = () =>{
    const {CurrentUser} = useContext(UserContext)
    return(
        <div className="profile-container">
        <h1 className="prof-title">PROFILE</h1>
        <Profile user = {CurrentUser}/>
        <Overview user = {CurrentUser} />
        </div>
    )
   
}

export default ProfilePage