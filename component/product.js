import React from "react";
import { render } from "react-dom";
class product extends React.Component{
    product_name = 'lucky'
    price=200
    product_image="blob:https://web.whatsapp.com/435da83e-7b59-4ebc-8c3d-3f3191643bd8"

render(){
    return (<div>
        <h1>name:{this.product_name}</h1>
        <h2>price:{this.price}</h2>
        <img src={this.product_image}/>

    </div>
    )
}
}
export default product