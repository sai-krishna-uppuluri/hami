

import React from 'react'
import './Procedure.css'
import {RiNumber1 , RiNumber2, RiNumber3, RiNumber4} from 'react-icons/ri'
// import {TfiWrite} from 'react-icons/tfi'

function Procedure() {
  return (
    <div className='procedure-container'>
        <h1 className='heading-procedure'> How it Works..</h1>
            <div className='inner-container'>
                <div className='procedure-inner-container'>
                    <div className='each-procedure-container'>
                        <RiNumber1 size={35} className = "icon" />
                        <h1> Your Requirements</h1>
                     </div>
                </div>
                <div className='procedure-inner-container'>
                    <div className='each-procedure-container'>
                        <RiNumber2 size={35} className = "icon" />
                        <h1> Cost Estimation</h1>
                     </div>
                </div>
                <div className='procedure-inner-container'>
                    <div className='each-procedure-container'>
                        <RiNumber3 size={35} className = "icon" />
                        <h1> Execution</h1>
                     </div>
                </div>
                <div className='procedure-inner-container'>
                    <div className='each-procedure-container'>
                        <RiNumber4 size={35} className = "icon" />
                        <h1> Project Delivery</h1>
                     </div>
                </div>
        </div>
      </div>
  )
}

export default Procedure
