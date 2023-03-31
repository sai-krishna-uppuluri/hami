import React from 'react'
import './Footer.css'

import {BsInstagram , BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-container'>
      <h1 className='heading-footer'> Find Us On</h1>
      <div className='footer-inner-container'>
        <div className='address-container'>
            <p className='footer-text'>6-249, Sri Hari Gardens </p>
            <p className='footer-text'> Penamaluru </p>
            <p className='footer-text'> Vijayawada </p>
        </div>
        <div className='social-media-container'>
            <BsInstagram size = {30} className='social-icon'/>
            <BsLinkedin size={30} className='social-icon'/>
        </div>
        <div className='office-email-container'>
            <p className='footer-text'> email : u.sai.chowdary@gmail.com </p>
            <p className='footer-text'> 9866627816 </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
