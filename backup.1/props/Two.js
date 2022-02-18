import React from 'react';



 class Two extends React.Component {
  render() {
    return <>
    <h1>{this.props.name}</h1>
    <h2>{this.props.rlno}</h2>
    <h3>{this.props.sub}</h3>
    </>;
  }
}
export default Two