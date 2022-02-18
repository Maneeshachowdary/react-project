import React, { Component } from 'react'

 class First extends Component {
     state={
         message:"Hello"
     }
     btnHandler=(value)=>{
         this.setState({message:value})
     }
  render() {
    return (
      <>
      <h1>{this.state.message}</h1>
      <button onClick={this.btnHandler.bind(this,"gdmrg")}>gdmrg</button>
      <button onClick={this.btnHandler.bind(this,"gdngt")}>gdngt</button>
      
      </>
    )
  }
}
export default First;