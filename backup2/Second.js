import React from "react";
 
class Second extends React.Component{
  render(){
    return<>
    <hr>
    <h1>name is:{this.props.name}</h1>
    <h2>maneesha is a good girl:{this.props.product}</h2>
    <h4>{this.props.price}</h4>
    </hr>
    </>
  }
}
export default Second;