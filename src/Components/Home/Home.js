import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import Procedure from '../Procedure/Procedure'
import WhyUs from '../WhyUs/WhyUs'
import '../../App.css'
import Footer from '../Footer/Footer'


function Home() {
  return (
    <div className='app-container'>
      <Header />
      <Banner />
      <Services />
      <Procedure />
      <WhyUs/>
      <Footer />
    </div>
  )
}

export default Home
