import CodeData from '../../data/codes.json'
import React from 'react'
import './coding.styles.css'
class Coding extends React.Component {
  constructor(){
    super();
    this.state = {
        codes:CodeData['ARRAYS'],
        category:'ARRAYS'
    }
  }
   selectCategory = (category) =>{
     this.setState({codes:CodeData[category]}) 
     this.setState({category:category})
   }
  render(){
    const cod = this.state.codes
    return <div>  
      <button className="sem-button" onClick={()=>this.selectCategory('ARRAYS')}>ARRAYS</button>
      <button className="sem-button" onClick={()=>this.selectCategory('STRINGS')}>STRINGS</button>
      <button className="sem-button" onClick={()=>this.selectCategory('STACKS')}>STACKS</button>
      <button className="sem-button" onClick={()=>this.selectCategory('GREEDY')}>GREEDY</button>
      <button className="sem-button" onClick={()=>this.selectCategory('DYNAMIC-PROGRAMMING')}>DYNAMIC-PROGRAMMING</button>
      <div>
      
      <div className='overview'>
      <h1>{this.state.category}</h1>
        {  
            Object.keys(cod).map(questions => {
                const cod_s = cod[questions]
                return <div>
                    <h2>{cod_s['title']}</h2>
                    <button className='back-button'><a href = {cod_s['q_link']}>SOLVE</a></button>
                    <button className='back-button'><a href = {cod_s['s_link']}>SOLUTION</a></button>
                </div>
            }
            )
        }
      </div>
      </div>
    </div>
  }
}
export default Coding