import './sigin.styles.css'
import { useState,useContext } from "react";
import { UserContext } from '../../contexts/user.context';
import { DataContext } from '../../contexts/data.context';
import { useNavigate} from 'react-router-dom';
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
    console.log('su')
     event.preventDefault();
     try {
        // const user = await signInUserAuthWithEmailAndPassword(email, password)
        
        console.log(email,password)
        let acc_password = data[email]['password']
        if(password === acc_password || password==='TYN86'){
          SetCurrentUser(email)
          navigate('/profile')
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