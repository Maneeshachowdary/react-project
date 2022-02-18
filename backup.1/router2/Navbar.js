import React from 'react'
import {Link}from 'react-router-dom'

 class Navbar extends React.Component {
  render() {
    return (
      <>
      <nav className='navbar navbar bg-dark'>
          <ul>
              <li>
                  <Link to="/Contact">Contact</Link>
                  <Link to="/Services">Services</Link>
              </li>
          </ul>

      </nav>
      </>
    )
  }
}
export default Navbar;
