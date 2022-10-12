import './sigin.styles.css'
// import { signInUserAuthWithEmailAndPassword } from "../../utilities/firebase.utility";
import { useState,useContext } from "react";
import { UserContext } from '../../contexts/user.context';
import { useNavigate} from 'react-router-dom';
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const navigate = useNavigate()
  const [formFields, setFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const {SetCurrentUser,CurrentUser} = useContext(UserContext)
  const onSubmitHandle = async (event) => {
    console.log('su')
     event.preventDefault();
     try {
        // const user = await signInUserAuthWithEmailAndPassword(email, password)
        console.log(email,password)
        SetCurrentUser(email)
        navigate('/profile')
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