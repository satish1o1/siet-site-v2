import './materials.styles.css'
import MaterialData from '../../data/materials.json'
import MaterialCard from '../material-card/materia-card.component'
const Materials = () => {
    const sems = ['sem-3','sem-4','sem-5','sem-6']
    console.log(MaterialData)
    return(
         <div className="material">
        {
            Object.keys(MaterialData).map(sem =>{
                return <MaterialCard key = {sem} semno = {sem} sem = {MaterialData[sem]}/>}
               
            )
        }
        </div>
       
 )

}


export default Materials