
import { useContext,useState } from 'react'
import { DataContext } from '../../contexts/data.context'
import { UserContext } from "../../contexts/user.context";
import { Update_Marks } from "../../utils/firebase/firebase.utils";
import './update-marks.styles.css'

const defaultSemFields = {
    sem:'CHOOSE SEM',
    sem_obj:''
};
const  UpdateMarks  = () =>{
    const [semFields,setFields] = useState(defaultSemFields)
    const {sem,sem_obj} = semFields
    const {data,setData} = useContext(DataContext)
    const {CurrentUser} = useContext(UserContext)

    const selectSem = (sem) =>{
        setFields({
            sem: sem,
            sem_obj:data[CurrentUser]['marks'][sem],
          });
    }
       
    const gradeSubmit = (subject,grade) => {
        let new_obj =  sem_obj
        new_obj[subject] = [grade,new_obj[subject][1]]
        setFields({
            ...semFields,
            sem_obj:new_obj,
        })
        
    }

    const onSubmitHandle = async (event) => {
        event.preventDefault();
        alert('SUCCESSFULLY UPDATED')
        try {
          let new_f_obj = Object.create(data)
          new_f_obj[CurrentUser]['marks'][sem] = sem_obj
          setData(new_f_obj)
          await Update_Marks(CurrentUser,data[CurrentUser])
      
        } catch (error) {
           console.log(error.code)
        }
     };
        
     let semister = sem_obj
        return(
            <div className="update-marks">
       <button className="sem-button" onClick={()=>selectSem('sem-1')}>SEM-1</button>
       <button className="sem-button" onClick={()=>selectSem('sem-2')}>SEM-2</button>
       <button className="sem-button" onClick={()=>selectSem('sem-3')}>SEM-3</button>
       <button className="sem-button" onClick={()=>selectSem('sem-4')}>SEM-4</button>
       <button className="sem-button" onClick={()=>selectSem('sem-5')}>SEM-5</button>
       <button className="sem-button" onClick={()=>selectSem('sem-6')}>SEM-6</button>
       <button className="sem-button" disabled onClick={()=>selectSem('sem-7')}>SEM-7</button>
       <button className="sem-button" disabled onClick={()=>selectSem('sem-8')}>SEM-8</button>
       <h1 className="title">{sem.toUpperCase()}</h1>
       <div>
        {
            Object.keys(semister).map(subjects => {
                return (
                    <div>
                        <h3 >{subjects}</h3>
                        <input className="grade_field" name = {subjects}  placeholder={semister[subjects][0]} disabled></input>
                        <div>
                            <button className="grade-button" onClick={()=>{gradeSubmit(subjects,'O')}} >O</button>
                            <button className="grade-button" onClick={()=>{gradeSubmit(subjects,'S')}} >S</button>
                            <button className="grade-button" onClick={()=>{gradeSubmit(subjects,'A')}}>A</button>
                            <button className="grade-button" onClick={()=>{gradeSubmit(subjects,'B')}} >B</button>
                            <button className="grade-button" onClick={()=>{gradeSubmit(subjects,'C')}} >C</button>
                            <button className="grade-button" onClick={()=>{gradeSubmit(subjects,'D')}}>D</button>
                            <button className="grade-button" onClick={()=>{gradeSubmit(subjects,'F')}}>F</button>

                        </div>
                    </div>
                )
            })
            
        }
        
            
        {
           (sem !== 'CHOOSE SEM') ? (<button className="btn subm" onClick={onSubmitHandle}>SUBMIT</button>):(<h1></h1>)
        }
       </div>
          </div>
        )
}



export default UpdateMarks

