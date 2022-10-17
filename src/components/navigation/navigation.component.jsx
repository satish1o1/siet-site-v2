import { Outlet,Link } from "react-router-dom"
import { Fragment ,useContext} from "react"
import { UserContext } from "../../contexts/user.context"
import { useNavigate} from 'react-router-dom';
import { MenuContext } from "../../contexts/menu.context";
import Menu from "../../components/menu/menu.component"; 
import Janasana from '../../assests/janasana.png'
import '../navigation/navigation.styles.css'
const Navigation = () => {
    const navigate = useNavigate()
    const {CurrentUser,SetCurrentUser} = useContext(UserContext)
    const {SetIsOpen} = useContext(MenuContext)
    const signOut = () => {
     console.log('user logged out')
     SetCurrentUser(null)
     navigate('/')

  
    }
    return(
        <Fragment>
              <div className="navigation">
              {
                CurrentUser && (<Link  to="/profile">
        <img className="logo-container" src = {Janasana} />
        </Link>)
              }
              
              <div className="nav-links-container">
              {
                CurrentUser && (<Link to="/profile" className="nav-link">
            
            </Link>)
              }
              
            </div>
         

        <div className="nav-links-container">
          {CurrentUser ? (
            <div>
            <span className="nav-link" onClick={signOut} >
              SIGNOUT
            </span>
            <span className="nav-link" onClick={()=>SetIsOpen(true)} >
            &#9776;
            </span>
            </div>
           
          ) : (
            <Link to="/" className="nav-link">
            SIGNIN
            </Link>
              )}
        
           </div>
        
      </div>       
      <div>
      <Menu />
      </div>  
        <Outlet />
      </Fragment>
        
    )
}

export default Navigation