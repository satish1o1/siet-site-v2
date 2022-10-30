import MarksCard from '../marks-card/marks-card.component'
import { useContext } from 'react'
import { DataContext } from '../../contexts/data.context'
import { UserActivities } from '../../utils/firebase/firebase.utils'
import './marks.styles.css'
const Marks = ({user}) => { 

    const {data} = useContext(DataContext)
    const semisters = data[user]['marks']
    const keys = Object.keys(semisters).sort()
    UserActivities(user,'MARKS-VIEWED')
    return(
        <div className="marks">
        {
            keys.map(sem =>{
                return <MarksCard sem ={semisters[sem]} numbr = {sem} key ={sem}/>}
               
            )
        }
        </div>
    )
}


export default Marks