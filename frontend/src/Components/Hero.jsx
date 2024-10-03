import React from 'react'
import '../CSS/Hero.css'
import btn from '../Assets/icon.png'
import hero from '../Assets/img.png'

const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className='head'>
            <div className='st'>
                <p id="h1">Mocaby & Co <br/>Group</p>
                <p id="p1">Management consultants</p>
                <p id="p2">
                    We help businesses thrive with personalized consulting services, 
                    strategic planning, and operational expertise. Trust our team to drive growth,
                    improve profitability, and overcome challenges.
                </p>
                <div className='btns'>
                    <button className='start'>Get Started</button>
                    <div className='learn'>
                        <img src={btn} alt='learn more'/>
                        <p>Learn More</p>
                    </div>
                </div>
            </div>
            <div className='hero-img'>
                <img src={hero} alt='hero'/>
            </div>
        </div>
        
     </section>

    </>
  )
}

export default Hero