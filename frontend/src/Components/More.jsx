import React from 'react'
import card from '../Assets/card.png'
import '../CSS/More.css'


function More() {
  return (
    <section className='more'>
        <div className='more-container'>
            <div className='more-title'>
                <h4>Why People Choose Us?</h4>
                <p>At Mocaby & Smith, we understand you. We know that every project is unique, every team is different, and every workflow has its own quirks. That's why we've built a collaboration platform that's flexible, adaptable, and designed to meet you where you are. We understand that you need a solution that's easy to use, easy to customize, and easy to scale. And we understand that you deserve a partner that's committed to your success. With Mocaby & Smith, you'll get a platform that's tailored to your needs, a team that's dedicated to your goals, and a collaboration experience that just works.</p>
                <p>
                    We pride ourselves in our unique ability to work in a vibrant ecosystem of digital innovators, 
                    making human resources and payroll seamless. Our primary focus extends to the best interest 
                    of our Clients ensuring that your business runs smoothly allowing you to focus on strategic 
                    growth with increased profitability. This creates an overall positive business environment 
                    where employees are efficient, optimal, and effective in their work.
                </p>
                <button className='start'>Read more</button>
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

export default More