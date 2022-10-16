
import './material.styles.css'
const MaterialCard = ({semno,sem}) => {
    return(
        <div className = 'marks-card'>
        <h1 className='title'>{semno}</h1>
         { 
           Object.keys(sem).map(se =>{
            return <div key = {se} >
                <h2>{se}</h2>
            <button className='back-button'><a href = {sem[se]['link']} target ="_blank">DOWNLOAD</a></button>

            </div> 
           })
         }
        </div>
    )
}

export default MaterialCard