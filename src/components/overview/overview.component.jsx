import './overview.styles.css'
import { useContext } from 'react'
import {DataContext} from '../../contexts/data.context'
const Overview = ({user}) => {
    const {data} = useContext(DataContext)
    const sgpa = ()=>{
      let sgpa_a = []
      let sgpa_k_v = {}
      let back_log = {}
      const grade_val = {"O": 10, "S": 9, "A": 8, "B": 7, "C": 6, "D": 5, "F": 0}
      let st = ""
      let ci_gi = 0
      let ci_su = 0
      const marks = data[user]['marks']
      for(let sem in marks){
        let ci = 0;
        let si_gi = 0;
        for(let sub in marks[sem]){
          let grades = marks[sem][sub];
          let c = grades[1];
          let g = grades[0];
          if(g=='F'){
            back_log[sub] = c
          }
          let g_v = grade_val[g];
          si_gi +=parseFloat(c)*parseFloat(g_v);
          ci +=parseFloat(c);
        }
        let to = si_gi /ci;
        ci_gi += to*ci;
        ci_su +=ci;
        sgpa_k_v[sem] = to.toFixed(2);
        }
      let to_cgpa = ci_gi/ci_su;
      let eq_per = (to_cgpa -0.75)*10;
      return [sgpa_k_v,to_cgpa,eq_per,back_log]
      }
      
    let v = sgpa()
    return(
        <div className='overview'>
          <h1 className="prof-title">OVERVIEW</h1>   
         {
          Object.keys(v[3]).length && <h1 className="prof-title"><hr/>BACKLOGS</h1>
         }
          <div>
          
          {
            Object.keys(v[3]).map((key, index) => {
        return (
            <h2>
              {key}  :  {v[3][key]}
            </h2>
        );
      })}
      <hr/>
          </div>
          <div>
          {Object.keys(v[0]).map((key, index) => {
        return (    
         
          <div className='overview-group-it'>
              <h3>{key.toUpperCase().concat("    :")}</h3>
              <h3>{v[0][key]}</h3>
            </div>
            
        );
      })}
      <hr/>
          </div>
          <div>
            <h2>OVERALL CGPA  :  {v[1]}</h2>
            <h2>PERCENTAGE    : {v[2].toFixed(2)}</h2>
          </div>
        </div>
    )
}

export default Overview