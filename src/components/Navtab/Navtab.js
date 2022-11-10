import React from 'react'
import { Link } from 'react-router-dom'
import './Navtab.css'

const Navtab = () => {
  return (
    <div className='nav-tab'>
        <ul className='nav-links'>
          <Link style={{textDecoration: 'none'}} to="/">
            <li>Industry</li>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/services">
            <li>Services</li>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/sdlc">
            <li>System Development Life Cycle</li>
          </Link>
          <Link style={{textDecoration: 'none'}} to="/partnershipmodel">
            <li>Partnership Model</li>
          </Link>
        </ul>
    </div>
  )
}

export default Navtab