import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Gallery from '../Components/Gallery'
import Services from '../Components/Services'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Gallery/>
    <Services/>
    </>
  )
}

export default Home