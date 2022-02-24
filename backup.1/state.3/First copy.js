import React, { Component } from 'react'

 class First extends Component {
   state={
     mani:'helo papa'
   }
   updateHandler=()=>{
     this.setState({mani:"Tellme"})
   }
   eventHandler=()=>{
     this.setState({mani: "hru"})
   }
  render() {
    return (
      <div>
        <h1>{this.state.mani}</h1>
        <button onClick={this.updateHandler}>haa</button>
        <button onClick={this.eventHandler}>fine</button>
      </div>
    )
  }
}
export default First
