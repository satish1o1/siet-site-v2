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
      <div className='sem-button-container'>
      <button className="code-category-button btn" onClick={()=>this.selectCategory('ARRAYS')}>ARRAYS</button>
      <button className="code-category-button btn" onClick={()=>this.selectCategory('STRINGS')}>STRINGS</button>
      <button className="code-category-button btn" onClick={()=>this.selectCategory('STACKS')}>STACKS</button>
      <button className="code-category-button btn" onClick={()=>this.selectCategory('GREEDY')}>GREEDY</button>
      <button className="code-category-button btn" onClick={()=>this.selectCategory('DYNAMIC-PROGRAMMING')}>DYNAMIC-PROGRAMMING</button>
      </div>
      <div>
      
      <div className='overview'>
      <h1 className='title'>{this.state.category}</h1>
        {  
            Object.keys(cod).map(questions => {
                const cod_s = cod[questions]
                return <div>
                  <h2>{questions} {cod_s['title']}</h2>
                    <div className='codes-button-container'>
                    <button className='codes-sub-buttons btn'><a href = {cod_s['q_link']} target ="_blank">SOLVE</a></button>
                    <button className='codes-sub-buttons btn'><a href = {cod_s['s_link']} target ="_blank">SOLUTION</a></button>
                </div>
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