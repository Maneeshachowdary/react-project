import React from 'react'
class First extends React.Component {
    state={
        msg:"hello"
    }
    updateHandler=()=>{
        this.setState({msg:"lucky"})

    }
    gdmrgHandler=()=>{
        this.setState({msg:"papa"})
    }
    gdeveHandler=()=>{
        this.setState({msg:"maneesha"})
    }
  render(){
    return (
      <>
      <h1>{this.state.msg}</h1>
      <button onClick={this.updateHandler}>lucky</button>
      <button onClick={this.gdmrgHandler}>papa</button>
      <button onClick={this.gdeveHandler}>maneesha</button>


    </>
    )
  }
}
export default First;