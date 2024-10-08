import React from 'react'
import card from '../Assets/card.png'
import bcase from '../Assets/case.png'
import sanlam from '../Assets/sanlam2.jpg'
import '../CSS/Page2.css'

const Page2 = () => {
  return (
    <section className='page'>
        <div className='page-container'>
            <div className='page-img'>
                <img src={sanlam} alt='page'/>
            </div>
            <div className='page-text'>
                <h2>Group Benefits</h2>
                <p id='p-1'>
                We are please to announce the partnership with Sanlamfor our newest instalment of GroupBenefits.
                </p>
                <div className='page-icon'>
                    <div className='page-icon-img'>
                        <img src={card} alt='card icon'/>
                    </div>
                    <div className='page-icon-text'>
                        <h4>Death Benefits</h4>
                        <p>
                        Sanlam Umbrella Fund ~ Mocaby & Co
                        </p>
                    </div>
                </div>

                <div className='page-icon'>
                    <div className='page-icon-img'>
                        <img src={bcase} alt='card icon'/>
                    </div>
                    <div className='page-icon-text'>
                        <h4>Funeral Cover</h4>
                        <p>
                        Sanlam Umbrella Fund ~ Mocaby & Co

                        </p>
                    </div>
                </div>

                <div className='page-icon'>
                    <div className='page-icon-img'>
                        <img src={bcase} alt='card icon'/>
                    </div>
                    <div className='page-icon-text'>
                        <h4>Provident Fund</h4>
                        <p>
                        Sanlam Umbrella Fund ~ Mocaby & Co

                        </p>
                    </div>
                </div>
                <div className='page-icon'>
                    <div className='page-icon-img'>
                        <img src={bcase} alt='card icon'/>
                    </div>
                    <div className='page-icon-text'>
                        <h4>Disability Income Benefits</h4>
                        <p>
                        Sanlam Umbrella Fund ~ Mocaby & Co

                        </p>
                    </div>
                </div>
                <div className='bt'>
                    <button className='start'>Get Started</button>
                </div>

            </div>
           
        </div>

        <div className='more-container'>
            <div className='more-title'>
                <h4>Unlock Your Business Potential with Mocaby & Smith</h4>
                <p>At Mocaby & Smith, we empower businesses to thrive in today's fast-paced market. Our team of experts provides tailored solutions to help you overcome challenges, drive growth, and achieve success.</p>
                <p>
                With our expertise in business planning, financial analysis, and operational strategy, we help you make informed decisions, optimize resources, and stay ahead of the competition.
                </p>
                <div className='b'>
                <button className='start'>Read more</button></div>
            </div>
            <div className='more-text'>

                <div className='more-icon'>
                    
                    <div className='more-icon-text'>
                        <div className='merge'>
                            <img src={card} alt='card icon'/>
                            <h4>Expert Property Solutions</h4>
                        </div>
                        <p>
                        At Mocaby & Smith, we provide expert property solutions that cater to your unique needs. Our team of experienced professionals will guide you through every step of the process.
                        </p>
                    </div>

                   
                    <div className='more-icon-text'>
                        <div className='merge'>
                            <img src={card} alt='card icon'/>
                            <h4>Maximizing Property Value</h4>
                        </div>
                        <p>
                        Our team at Mocaby & Smith is dedicated to helping you maximize the value of your property. We use our expertise and knowledge of the market to ensure you get the best possible return on your investment.
                        </p>
                    </div>
                </div>

                

                <div className='more-icon'>
                   
                    <div className='more-icon-text'>
                        <div className='merge'>
                            <img src={card} alt='card icon'/>
                            <h4>Personalized Service</h4>
                        </div>
                        <p>
                        At Mocaby & Smith, we pride ourselves on providing personalized service to each and every one of our clients. We take the time to understand your unique needs and goals, and tailor our services to meet them.

                        </p>
                    </div>

                   
                    <div className='more-icon-text'>
                        <div className='merge'>
                            <img src={card} alt='card icon'/>
                            <h4>Secure and Reliable</h4>
                        </div>
                        <p>
                        At Mocaby & Smith, we understand the importance of security and reliability when it comes to property transactions. That's why we use the latest technology and best practices to ensure your information is safe and secure.

                        </p>
                    </div>

                </div>

                <div className='more-icon'>
                   
                    <div className='more-icon-text'>
                        <div className='merge'>
                            <img src={card} alt='card icon'/>
                            <h4>Award-Winning Team</h4>
                        </div>
                        <p>
                        Our team at Mocaby & Smith has received numerous awards and recognition for our outstanding service and expertise in the property industry. We're proud of our achievements and committed to continuing to provide exceptional service to our clients.

                        </p>
                    </div>

                   
                    <div className='more-icon-text'>
                        <div className='merge'>
                            <img src={card} alt='card icon'/>
                            <h4>Partners in Success</h4>
                        </div>
                        <p>
                        At Mocaby & Smith, we believe in building long-term relationships with our clients. We're committed to being your trusted partner every step of the way, providing personalized guidance and support to help you achieve your goals.
                        </p>
                    </div>

                </div>
                {/* <button className='start'>Get Started</button> */}

            </div>
        </div>
    </section>
  )
}

export default Page2