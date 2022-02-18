import React from 'react'
class First extends React.Component {
    state={
        message:"Hello mani"

    }
    gmHandler=()=>{
      this.setState({message:"hello gud mrng"})
    }
    gnHandler=()=>{
      this.setState({message:"gdnight"})
    }
    
    
  render() {
    return (
    <div>
        <h3>message:{this.state.message}</h3>

        <button onClick={this.gmHandler}>gm</button>
        <button onClick={this.gnHandler}>gn</button>


    </div>
    )
  }

}
export default First
