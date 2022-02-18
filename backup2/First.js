import React from "react";
import Second from './Second';

class First extends React.Component{
  name="dress" 
  price=500

  render(){
    return <>
    <First name={this.name}
    product={this.product}
    price={this.price}/>
    </>
    
    }
  }
export default First;