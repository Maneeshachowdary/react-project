import React from 'react'
class First extends  React.Component {
    state={
         message:"hello pandi lucky"
         
         }
     updateHandler=()=>{
         this.setState({message:"byee"})
     }
         eventHandler=()=>{
             this.setState({message:"lucky"})
        }
        exceptHandler=()=>{
            this.setState({message:"maneesha"})
        }
  render() {
    return (
      <>
      <h1>{this.state.message}</h1>
      <button onClick={this.updateHandler}>byee</button>
      <button onClick={this.eventHandler}>lucky</button>
      <button onClick={this.exceptHandler}>maneesha</button>
      </>
    )
  }
}
export default First;
