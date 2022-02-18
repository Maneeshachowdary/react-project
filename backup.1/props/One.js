import React from 'react';
import Two from './Two';

class One extends React.Component {
   Name="maneesha"
 rlno="63"
  sub="ui"

  render() {
    return <Two 
        name={this.Name}
        rlno={this.rlno}
     sub={this.sub}/>
  }
}
export default One;
