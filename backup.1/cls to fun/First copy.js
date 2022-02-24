import React, { Component } from 'react'
import Sec from './Sec'

 class First extends Component {
     Name='Iphone'
     Price=4500
     Owner="maneesha"
     Loc="Bnglre"
  render() {
    return (
        <> 
        <Sec         
          Name={this.Name}
          Price={this.Price}
          Owner={this.Owner}
          Loc={this.Loc}/>
          
          </>
    ) 
    
  }
}

export default First
