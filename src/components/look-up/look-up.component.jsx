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
    const arr = ['19EM1A0501', '19EM1A0502', '19EM1A0503', '19EM1A0504', '19EM1A0505', '19EM1A0506', '19EM1A0507', '19EM1A0508', '19EM1A0509', '19EM1A0510', '19EM1A0511', '19EM1A0512', '19EM1A0514', '19EM1A0515', '19EM1A0516', '19EM1A0517', '19EM1A0518', '19EM1A0519', '19EM1A0520', '19EM1A0521', '19EM1A0522', '19EM1A0523', '19EM1A0524', '19EM1A0525', '19EM1A0526', '19EM1A0527', '19EM1A0528', '19EM1A0529', '19EM1A0530', '19EM1A0531', '19EM1A0532', '19EM1A0533', '19EM1A0534', '19EM1A0535', '19EM1A0536', '19EM1A0537', '19EM1A0538', '19EM1A0539', '19EM1A0540', '19EM1A0541', '19EM1A0542', '19EM1A0543', '19EM1A0544', '19EM1A0548', '19EM1A0549', '19EM1A0550', '19EM1A0551', '19EM1A0552', '19EM1A0553', '19EM1A0554', '19EM1A0555', '19EM1A0556', '19EM1A0557', '19EM1A0558', '19EM1A0559', '19EM1A0560', '19EM1A0561', '19EM1A0562', '19EM1A0563', '19EM1A0564', '19EM1A0565']
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