import React, { Component } from 'react'

 class Sec extends Component {
  

  render() {
    return (
      <div>
          <h1>{this.props.Name}</h1>
          <h2>{this.props.Rno}</h2>
          <h3>{this.props.Loc}</h3>
      </div>
    )
  }
}
export default Sec;





