import React from 'react'
import './WhyUs.css'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

import {MdKeyboardArrowDown} from 'react-icons/md'

function WhyUs() {
  return (
    <div className='why-us-container'>
        <h1 className='why-us-heading'> Why Choose Us..</h1>
        <div className='why-us-inner-container'>
            <div className='why-us-each-container'>
                <h1 className='side-heading'> PLan Approval </h1>
                <MdOutlineArrowForwardIos size={60} className='side-arrow'/>
                <MdKeyboardArrowDown size={30}  className='down-arrow'/>
                <div className='explanation-container'>
                    <p>
                        We will take care about all the process that were required to get the
                        approval from the local authority. We know the process of getting the 
                        design approval was hectic but now you don`t have to worry about these
                        approvals. Haami will take care of all your approval needs. 
                    </p>
                </div>
            </div>
            <div className='why-us-each-container'>
                <h1 className='side-heading'> Quality Assurance </h1>
                <MdOutlineArrowForwardIos size={60} className='side-arrow'/>
                <MdKeyboardArrowDown size={30}  className='down-arrow'/>
                <div className='explanation-container'>
                    <p>
                        Haami`s most important priority was quality. We do not compromise in the 
                        quality of the Material used for the project. All the material were 
                        tested in the lab. 
                    </p>
                </div>
            </div>
            <div className='why-us-each-container'>
                <h1 className='side-heading'> Material Procurement </h1>
                <MdOutlineArrowForwardIos size={60} className='side-arrow'/>
                <MdKeyboardArrowDown size={30}  className='down-arrow'/>
                <div className='explanation-container'>
                    <p>
                        60% of the construction goes only to the material. Hence, Haami take cares
                        of all the Procurement process with best price in the market.  
                    </p>
                </div>
            </div>
            <div className='why-us-each-container'>
                <h1 className='side-heading'> Dedicated Project Engineer </h1>
                <MdOutlineArrowForwardIos size={60} className='side-arrow'/>
                <MdKeyboardArrowDown size={30}  className='down-arrow'/>
                <div className='explanation-container'>
                    <p>
                        Dedicated Project Engineer is assigned to each project. He is responsible for the
                        communication between the You and Haami. You can able to clear all your quires by 
                        directly contacting the Project Engineer.   
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs
