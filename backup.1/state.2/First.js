import React, { Component } from 'react'

 class First extends Component {
   state={
     counter:8
   }
   updateHandler=()=>{
     this.setState({counter:this.state.counter+1})
   }
   eventHandler=()=>{
     this.setState({counter:this.state.counter-1})
   }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.updateHandler}>inc</button>
        <button onClick={this.eventHandler}>dec</button>
      </div>
    )
  }
}

export default First