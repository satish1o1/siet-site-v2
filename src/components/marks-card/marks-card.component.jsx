import './marks-card.styles.css'
const MarksCard = ({sem,numbr}) => {
    return(
        <div className="marks-card">
        <h1 className='title'>{numbr.toUpperCase()}</h1>
         {
           Object.keys(sem).map(se =>{
            return <div className='group-it'>
              <h3>{se}</h3>
              <h3>{sem[se][0]}</h3>
            </div> 
           })
         }
         </div>
    
    )
}

export default MarksCard