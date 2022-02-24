import React, { Component } from 'react'

 class First extends Component {
   state={
     msg:"Hlo"
   }
   updateHandler=()=>{
     
     this.setState({msg:"gudmrg"})
   }
   eventHandler=()=>{
     this.setState({msg:"gdngt"})
   }
  

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.updateHandler}>Byee</button>
        <button onClick={this.eventHandler}>gudbyee</button>
  


      </div>
    )
  }
}

export default First
