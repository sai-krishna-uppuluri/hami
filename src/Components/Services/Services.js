import React from 'react'
import './Services.css'
import planning from '../../assets/planning.mp4'
import house from '../../assets/resdential-house.mp4'
import material from '../../assets/material.mp4'
import interior from '../../assets/interior.mp4'
import {Navigate} from 'react-router-dom'
import Contact from '../Contact/Contact'

function Services() {

    const onClickBookNow = () => {
        <div>
            <Contact />
        </div>
    }

  return (
    <div className='services-container'>
        <div className='each-service-container'>
            <div className='each-service-inner-container'>
                <video src={planning} autoPlay loop muted className='service-videos'/>
                 <h1>Planning</h1>
            </div>
            <button type='button' className='service-btn' onClick={onClickBookNow}> Book Now </button>
        </div>
        <div className='each-service-container'>
            <div className='each-service-inner-container'>
                <video src={house} autoPlay loop muted className='service-videos'/>
                 <h1> Residential House Constructions</h1>
                 
            </div>
            <button type='button' className='service-btn'> Book Now </button>
        </div>
        <div className='each-service-container'>
            <div className='each-service-inner-container'>
                <video src={material} autoPlay loop muted className='service-videos'/>
                 <h1> Material Procurement </h1>
            </div>
            <button type='button' className='service-btn'> Book Now </button>
        </div>
        <div className='each-service-container'>
            <div className='each-service-inner-container'>
                <video src={interior} autoPlay loop muted className='service-videos'/>
                 <h1>Interior Works</h1>
            </div>
            <button type='button' className='service-btn'> Book Now </button>
        </div>
    </div>
  )
}

export default Services
