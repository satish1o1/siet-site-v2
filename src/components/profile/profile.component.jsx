
import { useContext } from "react";
import { DataContext } from "../../contexts/data.context";
import './profile-page.styles.css'
const Profile = ({user}) => {
    const {data} = useContext(DataContext)
    const {id,name,email,number,address,dob} = data[user]['details']
    return(

    <div className='profile-section'>
    <div className="containerr"> 
    <div className="profile"> 
      <h2 className="profile-value">REGISTER ID</h2>
      <h3 className="profile-value">{id}</h3>
      <h2 className="profile-value" >NAME</h2>
      <h3 className="profile-value"> {name}</h3>
      <h2 className="profile-value" >EMAIL</h2>
      <h3 className="profile-value" >{email}</h3>
      <h2 className="profile-value" >CONTACT NO</h2>
      <h3 className="profile-value" >{number}</h3>
      <h2 className="profile-value" >DATE OF BIRTH</h2>
      <h3 className="profile-value" >{dob}</h3>
      <h2 className="profile-value">ADDRESS</h2>
      <h3 className="profile-value">{address}</h3>
    </div> 
  </div>  
  </div>

   
    )
}

export default Profile