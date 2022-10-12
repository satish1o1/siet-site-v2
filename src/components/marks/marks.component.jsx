import './marks.styles.css'
import MarksCard from '../marks-card/marks-card.component'
import { useContext } from 'react'
import { DataContext } from '../../contexts/data.context'
const Marks = ({user}) => {  
    const {data} = useContext(DataContext)
    const semisters = data[user]['marks']
    console.log(semisters)
    return(
        <div className="marks">
        {
        
            Object.keys(semisters).map(sem =>{
                return <MarksCard sem ={semisters[sem]} numbr = {sem} />}
               
            )
        }
        </div>
    )
}


export default Marks