import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {

  render() {
    return (
      <div>
          <nav className='navbar navbar bg-dark' >
              <ul>
                  <li>
                      <Link to="/Services">Services</Link>
                      <Link to="/Contact">Contact</Link>
                  </li>
              </ul>

          </nav>

      </div>
    )
  }
}

export default Navbar;