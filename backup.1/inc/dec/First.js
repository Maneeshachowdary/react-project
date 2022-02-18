import React from "react";
import { render } from "react-dom";
class First extends React.Component{
    state={
        message:1

    }
    incHandler=()=>{
        this.setState({message:this.state.message+1});

    }
    decHandler=()=>
    this.setState({message:this.state.message-1});

render(){
    return(
        <div>
            <h3>{this.state.message                                                                                                                         }</h3>
            <button onClick={this.incHandler}>inc</button>
            <button onClick={this.decHandler}>dec</button>

        </div>
    )}
}
export default First;
