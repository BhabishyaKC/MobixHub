'use client '
import Footer from '@/components/footer'
import NavbarPage from '@/components/header'
import { Slider } from '@/components/mainSlider'
import OurDealssection from '@/components/ourDeals-section'
import React from 'react'

const Home = () => {

  return (
    <div>
      <NavbarPage/> 
      <Slider/>
      <OurDealssection/>
      <Footer/>
    </div>
  )
}

export default Home