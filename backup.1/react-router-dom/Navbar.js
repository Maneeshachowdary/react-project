import React, { Component } from 'react';
import {Link} from 'react-router-dom'

 class Navbar extends React.Component {
  render() {
    return <> <Link to='/Services'>Services </Link>
              <Link to='/Contact'>Contact </Link>
</>
  }
}
export default Navbar;
