import React, { Component } from 'react'


 class Sec extends Component {
  render() {
    return (
      <>
      <h1>{this.props.name}</h1>
      <h2>{this.props.rno}</h2>
      <h3>{this.props.location}</h3>
      </>
    )
  }
}
export default Sec;