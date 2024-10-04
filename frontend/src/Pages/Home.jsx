import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Gallery from '../Components/Gallery'
import Services from '../Components/Services'
import Testimonials from '../Components/Testimonials'
import More from '../Components/More.jsx'


const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Gallery/>
    <Services/>
    <More/>
    <Testimonials/>
    </>
  )
}

export default Home