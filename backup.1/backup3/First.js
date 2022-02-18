import React, { Component } from 'react';

 class First extends Component {
     state={
         message:"Hello mani"

     }
     gmHandler=()=>{
         this.setState({message:"i hate lucky"})
     }
     
     

  render() {
    return <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.gmHandler}>gm</button>
    </div>;
  }
}
export default First;
