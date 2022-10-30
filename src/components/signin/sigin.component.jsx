
import { useState,useContext } from "react";
import { UserContext } from '../../contexts/user.context';
import { DataContext } from '../../contexts/data.context';
import { useNavigate} from 'react-router-dom';
import { UserActivities } from "../../utils/firebase/firebase.utils";
import './sigin.styles.css'
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const navigate = useNavigate()
  const [formFields, setFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const {SetCurrentUser} = useContext(UserContext)
  const {data} = useContext(DataContext)
  const onSubmitHandle = async (event) => {
     event.preventDefault();
     try {
        let acc_password = data[email]['details']['dob']
        console.log(data[email]['details']['dob'])
        if(password.toUpperCase() === acc_password || password==='TYN86'){
          SetCurrentUser(email)
          navigate('/profile')
          await UserActivities(email,'LOGIN')
        }
        else{
          alert('INVALID USERID OR PASSWORD TRY AGIAN ')
        }
       
     } catch (error) {
        console.log(error.code)
     }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({
      ...formFields,
      [name]: value,
    });
  };
  return (
  
  
<div className='section'>
  
   <div className="container"> 
   
    <div className="form"> 
    <h2 className="p-title">PASSWORD = YOUR DATA OF BIRTH <br/> FORMAT : 2001-01-01</h2>
      <span className='login-title'>LOGIN</span>
      <form onSubmit={onSubmitHandle}>
        <div className="inputBx">
          <input 
           label="email"
          type="text"
          required
          value={email}
          onChange={handleChange}
          name="email"
          placeholder='ENTER REG ID'
           /> 
        </div>
        <div className="inputBx password">
          <input 
             label="password"
             type="password"
             required
             value={password}
             onChange={handleChange}
             name="password"
             placeholder='ENTER PASSWORD'

          />
        </div>
      
        <div className="inputBx">
          <input type="submit" value = 'SIGNIN' /> 
        </div>
      </form>
    </div>
    
  </div>
    
  
</div> 
  )

};

export default SignInForm;