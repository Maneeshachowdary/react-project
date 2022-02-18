import React from 'react'

 class Bind extends React.Component {
     state={
         emp_sal :30000 }
     btnHandler=(value)=>{
        this.setState({emp_sal:30000 + value})
     }
  render() {
    return (
      <>
      <h1>{this.state.emp_sal}</h1>
      <button onClick={this.btnHandler.bind(this,10000)}>10000</button>
      <button onClick={this.btnHandler.bind(this,20000)}>20000</button>
      </>
    );
  }
}
export default Bind;