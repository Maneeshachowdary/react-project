import React, { Component } from 'react'
import{Link}from 'react-router-dom'
 class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar bg-dark'>
          <ul>
            <li>
              <Link to='/Contact'>Contact</Link>
              <Link to='/Services'>Services</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Navbar;

