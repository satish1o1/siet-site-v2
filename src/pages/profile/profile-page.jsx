import React from "react";
import Profile from "../../components/profile/profile.component";
import Overview from "../../components/overview/overview.component";
import './profile.styles.css'
import Marks from "../../components/marks/marks.component";
import Materials from "../../components/materials/material.component";
import Jobs from "../../components/jobs/jobs.component";
import Coding from "../../components/coding/coding.component";
import UpdateMarks from "../../components/update-marks/update-marks.component";
import { addUserDoc } from "../../utils/firebase/firebase.utils";
import LookUp from "../../components/look-up/look-up.component";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { MenuContext } from "../../contexts/menu.context";

const ProfilePage = () =>{
    const {CurrentUser} = useContext(UserContext)
    return(
        <div className="profile-container">
        <Profile user = {CurrentUser}/>
        <Overview user = {CurrentUser} />
        </div>
    )
   
}

export default ProfilePage