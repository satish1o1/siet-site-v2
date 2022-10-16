
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
      <h1>REGISTER ID</h1>
      <h2>{id}</h2>
      <h1>NAME</h1>
      <h2>{name}</h2>
      <h1>EMAIL</h1>
      <h2>{email}</h2>
      <h1>CONTACT NO</h1>
      <h2>{number}</h2>
      <h1>DATE OF BIRTH</h1>
      <h2>{dob}</h2>
      <h1>ADDRESS</h1>
      <h2>{address}</h2>
    </div> 
  </div>  
  </div>

   
    )
}

export default Profile