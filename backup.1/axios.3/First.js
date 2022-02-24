import React, { Component } from 'react'
import Axios from 'axios'
 class First extends Component {
     eventHandler=()=>{
       Axios.get('https://jsonplaceholder.typicode.com/users')
        
         .then((stack)=>{
             console.log(stack.data)

         }

         )
         .catch((pro)=>{
             console.log(pro.data)

         }

         )
     }
  render() {
    return (
      <div>
          <h1>Pro stack</h1>
          <button onClick={this.eventHandler}>Maneesha  </button>
      </div>
    )
  }
}
export default First;

