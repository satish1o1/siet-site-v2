import JobsData from '../../data/jobs.json'
import './jobs.styles.css'
const Jobs = () => {
    const jobs = JobsData['jobs']
    return(
        <div className='jobs-card'>
        {
          Object.keys(jobs).map(job =>{
            const {title,Batch,salary,link} = jobs[job]
            return <div  className='job-group'>
            <div className='group-it'>
              <h3>TITLE</h3>
              <h3>{title}</h3>
            </div> 
            <div className='group-it'>
              <h3>BATCH</h3>
              <h3>{Batch}</h3>
            </div>
            <div className='group-it'>
              <h3>SALARY</h3>
              <h3>{salary}</h3>
            </div>
            
         <a className='apply-button' href = {link} target ="_blank">APPLY</a>     
            
         
            </div>
          })
        }
       </div>
    )
}

export default Jobs