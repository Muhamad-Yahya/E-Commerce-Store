import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navPofile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" className="nav-logo" />
      <img className='nav-profile' src={navPofile} alt="" />
    </div>
  )
}

export default Navbar
