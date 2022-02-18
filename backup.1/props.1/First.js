import React, { Component } from 'react'
import Sec from "./Sec"
 class First extends Component {
     Name="Maneesha"
     rno=55
     location="Bangalore"
  render() {
    return (
      <>
      <Sec
       name={this.Name}
       rno={this.rno}
       location={this.location}

      />
      </>
    )
  }
}
export default First;
