import JobsData from '../../data/jobs.json'
import './jobs.styles.css'
const Jobs = () => {
    console.log(JobsData)
    const jobs = JobsData['jobs']
    return(
        <div className='jobs-card'>
        {
          Object.keys(jobs).map(job =>{
            const {title,batch,salary,link} = jobs[job]
            return <div  className='job-group'>
            <span className='job-sub-group'>
            <h2>TITLE</h2>
            <h2>{title}</h2>
            </span>
            <span className='job-sub-group'>
            <h2>BATCH</h2>
            <h2>2023</h2>
            </span>
            <span className='job-sub-group'>
            <h2>SALARY</h2>
            <h2>{salary}</h2>
            </span>
            <span className='job-sub-group'>
            <button className='back-button'><a href = {link}>APPLY</a></button>     
            </span>
         
            </div>
          })
        }
       </div>
    )
}

export default Jobs