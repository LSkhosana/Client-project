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

        
    </section>
  )
}

export default Page2