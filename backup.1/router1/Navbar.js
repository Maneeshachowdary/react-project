import React from 'react'
import{Link}from 'react-router-dom'
 class Navbar extends React.Component {
  render() {
    return (
      <>
      <nav className='navbar navbar bg-dark'>
          <ul>
              <li>
              </li>
              <Link to="/Contact"  className='ml-9'>Contacts</Link>
              <Link to="/Services" className='ml-9'>Services</Link>
              <Link to="/Mani" className='ml-9'>Mani</Link>
          </ul>
      </nav>
      </>
    )
  }
}
export default Navbar;
