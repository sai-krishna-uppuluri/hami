import React from 'react'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md'
import { useState } from 'react'
import './Heder.css'
import '../../App.css'


function Header() {

   // const [click, setClick] = useState(false)

    const [toggle , setToggle] = useState(false)

   // const handleClick = () => setClick(!click)

   // const closeMobileMenu = () => setClick(false)

  return (
    <nav className='nav-container'>
        <div className='nav-bar-logo-container'>
            <p> <Link to='/' className='nav-logo'> Hami </Link></p>
        </div>
        <ul className="nav-menu">
          <Link to='/' className='nav-link'><li className='nav-item'>  Home  </li></Link> 
          <Link to='/services'  className='nav-link'>  <li  className='nav-item'> Services </li></Link>
          <Link to='/about'  className='nav-link'>  <li  className='nav-item'>About Us </li></Link>
          <Link to='/contact'  className='nav-link'>  <li  className='nav-item'> Contact Us </li></Link>
        </ul>
        <div className='nav-menu-small-screens'>
          <GiHamburgerMenu color='#fff' size="2rem" onClick={() => setToggle(true)}/>

          {toggle && (
          <div className='nav-menu-small-screens-overlay'>
          <MdClose color='#fff' size={27} className="overlay-close" onClick={() => setToggle(false)} />
          <ul className="nav-menu-small-screens-list">
            <Link to='/' className='nav-link'><li>  Home  </li> </Link>
            <Link to='/services'  className='nav-link'><li> Services </li></Link>
            <Link to='/about'  className='nav-link'> <li>About Us </li></Link>
            <Link to='/contact'  className='nav-link'> <li> Contact Us </li></Link>
        </ul>
        </div>
        )}
        </div>
    </nav>
  )
}

export default Header
