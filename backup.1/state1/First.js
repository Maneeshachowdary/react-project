import React from 'react';
 class First extends React. Component {
     state={
         msg:"hello"
     }
    updateHandler=()=>{
        this.setState({msg:"bye"})
    }
  render() {
    return <>
    <h1>{this.state.msg}</h1>
    <button onClick={this.updateHandler}>bye</button>
    </>;
  }
}
export default First;