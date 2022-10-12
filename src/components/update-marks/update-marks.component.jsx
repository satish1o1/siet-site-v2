
import React from "react";
import { useContext,useState } from 'react'
import { DataContext } from '../../contexts/data.context'
import { UserContext } from "../../contexts/user.context";
import { Update_Marks } from "../../utils/firebase/firebase.utils";
import './update-marks.styles.css'

const defaultSemFields = {
    sem:'sem-1',
    sem_obj:''
};
const  UpdateMarks  = () =>{
    const [semFields,setFields] = useState(defaultSemFields)
    const {sem,sem_obj} = semFields
    const {data,setData} = useContext(DataContext)
    const {CurrentUser} = useContext(UserContext)

    const selectSem = (sem) =>{
        console.log(sem)
        setFields({
            sem: sem,
            sem_obj:data[CurrentUser]['marks'][sem],
          });
    }
       
    const gradeSubmit = (subject,grade) => {
        console.log(subject,grade)
        let new_obj =  sem_obj
        new_obj[subject] = [grade,new_obj[subject][1]]
        setFields({
            ...semFields,
            sem_obj:new_obj,
        })
        
    }

    const onSubmitHandle = async (event) => {
        event.preventDefault();
        try {
          let new_f_obj = Object.create(data)
          new_f_obj[CurrentUser]['marks'][sem] = sem_obj
          setData(new_f_obj)
          await Update_Marks(CurrentUser,data[CurrentUser])
      
        } catch (error) {
           console.log(error.code)
        }
     };
        
     const semister = sem_obj
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
       <h1>{sem.toUpperCase()}</h1>
       <div>
        {
            Object.keys(semister).map(subjects => {
                return (
                    <div>
                    <br/>
                        <span className="update_subject">{subjects}</span>
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
        <button className="back-button" onClick={onSubmitHandle}>SUBMIT</button>
       </div>
          </div>
        )
}



export default UpdateMarks

//class component 

// class UpdateMarks extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             sem:'sem-1',
//             sem_obj:MarksData['19EM1A01']['marks']['sem-1']
//         }
//     }

//     selectSem = (sem) =>{
//         this.setState({sem:sem})
//         this.setState({sem_obj:MarksData['19EM1A01']['marks'][sem]})
              
//     }  
    
//     gradeSubmit = (subject,grade) => {
//         console.log(subject,grade)
//         let new_obj =  this.state.sem_obj
//         new_obj[subject] = [grade,new_obj[subject][1]]
//         console.log(this.setState({sem_obj:new_obj}))
//     }

//     onSubmitHandle = async (event) => {
//         event.preventDefault();
//         try {
//            console.log('nothing')
      
//         } catch (error) {
//            console.log(error.code)
//         }
//      };


//     render(){
//         const semister = MarksData['19EM1A01']['marks'][this.state.sem]
//         console.log(this.state.sem)
//         console.log(this.state.sem_obj)
//         return(
//             <div>
//        <button onClick={()=>this.selectSem('sem-1')}>SEM-1</button>
//        <button onClick={()=>this.selectSem('sem-2')}>SEM-2</button>
//        <button onClick={()=>this.selectSem('sem-3')}>SEM-3</button>
//        <button onClick={()=>this.selectSem('sem-4')}>SEM-4</button>
//        <button onClick={()=>this.selectSem('sem-5')}>SEM-5</button>
//        <button onClick={()=>this.selectSem('sem-6')}>SEM-6</button>
//        <button disabled onClick={()=>this.selectSem('sem-7')}>SEM-7</button>
//        <button disabled onClick={()=>this.selectSem('sem-8')}>SEM-8</button>
//        <h3>{this.state.sem}</h3>
//        <div>
//         {
//             Object.keys(semister).map(subjects => {
//                 return (
//                     <div>
//                         <h4>{subjects}</h4>
//                         <input onChange={this.handleChange} name = {subjects}  placeholder={semister[subjects][0]} disabled></input>
//                         <div>
//                             <button onClick={()=>{this.gradeSubmit(subjects,'O')}} >O</button>
//                             <button onClick={()=>{this.gradeSubmit(subjects,'S')}} >S</button>
//                             <button onClick={()=>{this.gradeSubmit(subjects,'A')}}>A</button>
//                             <button onClick={()=>{this.gradeSubmit(subjects,'B')}} >B</button>
//                             <button onClick={()=>{this.gradeSubmit(subjects,'C')}} >C</button>
//                             <button onClick={()=>{this.gradeSubmit(subjects,'D')}}>D</button>
//                             <button onClick={()=>{this.gradeSubmit(subjects,'F')}}>F</button>

//                         </div>
//                     </div>
//                 )
//             })
            
//         }
//         <button onClick={this.onSubmitHandle}>SUBMIT</button>
//        </div>
//     </div>
//         )
//     }
// }

// export default UpdateMarks