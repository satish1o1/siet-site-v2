import './menu.styles.css'
import { useContext } from 'react'
import {Link } from "react-router-dom"
import {MenuContext} from '../../contexts/menu.context'
const Menu = () => {
    const {isOpen,SetIsOpen} = useContext(MenuContext)
   return (
      <div>
        {
            isOpen &&(
                
         <div  className="overlay MyNAV">
   <a className="closebtn" onClick={()=>SetIsOpen(false)}>&times;</a>
   <div className="overlay-content">
     <Link onClick = {()=>SetIsOpen(false)}  className="nav-link-container" to="/marks">
            <h3>MARKS</h3>
          </Link>
          <Link onClick = {()=>SetIsOpen(false)} className="nav-link-container" to="/update_marks">
            <h3>UPDATE MARKS</h3>
          </Link>
          <Link onClick = {()=>SetIsOpen(false)}className="nav-link-container" to="/look_up">
            <h3>LOOK UP</h3>
          </Link>
          <Link onClick = {()=>SetIsOpen(false)}className="nav-link-container" to="/jobs">
            <h3>JOBS</h3>
          </Link>
          <Link onClick = {()=>SetIsOpen(false)}className="nav-link-container" to="/coding">
            <h3>CODING</h3>
          </Link>
          <Link onClick = {()=>SetIsOpen(false)}className="nav-link-container" to="/material">
            <h3>MATERIALS</h3>
          </Link>
   </div>
         </div>
            )
        }
      </div>
   )
  
    

//         <div id="myNav" class="overlay">
//   <a className="closebtn" onclick={()=>console.log('menu closed')}>&times;</a>
//   <div class="overlay-content">
//     <span>About</span>
//     <h3>About</h3>
//     <h3>About</h3>
//     <h3>About</h3>
//   </div>
//         </div>

   
}

export default Menu