import React from 'react'
import about from '../Assets/Hero.png'
// import meet from '../Assets/meeting.jpg'
import '../CSS/About.css'
import card from '../Assets/card.png'



const About = () => {
  return (
    <section className='about'>
        <div className='about-container'>
            <div className='about-img'>
                <img src={about} alt='about'/>
            </div>
            <div className='about-text'>
                <p id='h5'>About Us</p>
                <h2>Respected Consulting Management Firm for Ambitious Businesses</h2>
                <p id='p-1'>
                    At Mocaby & Smith Consulting Management, we empower ambitious businesses to achieve their goals.
                    Our expert team provides tailored consulting services, strategic planning, 
                     and operational guidance to drive growth, improve profitability, and overcome challenges.
                </p>
                <div className='about-icon'>
                    <div className='about-icon-img'>
                        <img src={card} alt='card icon'/>
                    </div>
                    <div className='about-icon-text'>
                        <h4>Payroll Service</h4>
                        <p>
                            From leave management to employee data management, we handle it all with precision and care.
                            With our comprehensive payroll services, you can focus on growing your
                            business while we take care of your payroll needs.
                        </p>
                    </div>
                </div>

                <div className='about-icon'>
                    <div className='about-icon-img'>
                        <img src={card} alt='card icon'/>
                    </div>
                    <div className='about-icon-text'>
                        <h4>HR Service</h4>
                        <p>
                        We provide a complete range of HR services, including onboarding, performance management, 
                        training, and compliance support, to help your business thrive.

                        </p>
                    </div>
                </div>
                <button className='start'>Get Started</button>

            </div>
           
        </div>
    </section>
  )
}

export default About