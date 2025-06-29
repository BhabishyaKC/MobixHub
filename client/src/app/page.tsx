'use client '
import Footer from '@/components/footer'
import NavbarPage from '@/components/header'
import { Slider } from '@/components/mainSlider'
import React from 'react'

const Home = () => {

  return (
    <div>
      <NavbarPage/>
      <Slider/>
      <Footer/>
    </div>
  )
}

export default Home