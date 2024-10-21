import { useState } from 'react'
import Profile from '../profile/profile.component'
import Marks from '../marks/marks.component'
import Overview from '../overview/overview.component'
import './look-up.styles.css'
const defaultLookField = {
    lookUpUser:'',
    toggle:false
}
const LookUp = () => {
    const [LookUpFields,setFields] = useState(defaultLookField)
    const {lookUpUser,toggle} = LookUpFields
    const arr = ['19EM1A0501', '19EM1A0502', '19EM1A0503', '19EM1A0504', '19EM1A0505', '19EM1A0506', '19EM1A0507', '19EM1A0508', '19EM1A0509', '19EM1A0510', '19EM1A0511', '19EM1A0512', '19EM1A0514', '19EM1A0515']
    const setUser = (user) =>{
        setFields({
            toggle:true,
            lookUpUser:user
        })
    }
    return (
        <div className='look-up'>
  
        {!toggle &&(
            arr.map(a=>{
                return <div>
                    <span className='back-button' onClick={()=>{setUser(a)}}>{a}</span>
                </div>
            })
        )
        }
        {toggle && (<div>
            <button className='btn look-back' onClick={() =>{setFields({...LookUpFields,toggle:false})}}>BACK</button>
            <h1 className='lookupuser'>ID  {lookUpUser}</h1>
            <div>
                <Profile user = {lookUpUser}/>
                <Overview user = {lookUpUser} />
                <Marks user = {lookUpUser}/>

            </div>
        </div>)

        }
        </div>
      
    )
}


export default LookUp
