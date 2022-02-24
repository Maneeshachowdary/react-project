import React, { Component } from 'react'
 class Bind extends Component {
     state={msg:"hello"}
     eventHandler=(mani)=>{
         this.setState({msg:mani})
     }
  render() {
    return (
      <div>
          <h1>{this.state.msg}</h1>
          <button onClick={this.eventHandler.bind(this,"gdmrg")}>lucky</button>
          <button onClick={this.eventHandler.bind(this,'gdngt')}>maneesha</button>
      </div>
    )
  }
} 
export default Bind;
