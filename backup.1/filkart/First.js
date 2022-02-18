import React, { Component } from 'react';

 class First extends Component {
     state={
    Product_Name:"lehenga",
    price:1000,
    image:"https://rukminim1.flixcart.com/image/800/960/kt4ozgw0/fabric/n/u/l/yes-2-m-unstitched-2-2-m-qw1000-design-willa-original-imag6jrtfxr3h2nx.jpeg?q=50",
    Qty:1
    }
     incHandler=()=>{
         this.setState({ Qty:this.state.Qty+1})
        }
    decHandler=()=>{
    this.setState({Qty:this.state.Qty-1})
       }
     render() {
    return <> 
    <h3>Checking</h3>
    <div className="container">
    <div className="row">
        <div className="col-md-10">
            <button className='btn btn-info'>Check</button>
                <table className='table table-hover'>
                    <thead className='bg-secondary'>
                        <th>Product_Name</th>
                        <th>image</th>
                        <th>Price</th>
                         <th>Qty</th>
                        <th>Total Price</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.Product_Name}</td>
                                <td><img src={this.state.image} alt="This is it"/></td>
                                <td>{this.state.price}</td>
                                <td>{this.state.Qty}</td>
                                <td>
                                      <button className="fa fa-minus-circle" onClick={this.decHandler}>dec</button>
                                      {this.state.Qty}
                                      <i type="button" className="fa fa-plus-circle" onClick={this.incHandler}>inc</i>
                                      </td>
                                      <td>{this.state.price*this.state.Qty}</td>
                            </tr>
                            </tbody>
                      </table>
            </div>
        </div>
    </div>
     </>   
  }
}

export default First;
