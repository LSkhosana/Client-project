import React from 'react'
import img1 from '../Assets/meeting.jpg'
import img2 from '../Assets/meeting3.webp'
import img3 from '../Assets/meeting4.webp'
import img4 from '../Assets/mocaby-flags.webp'
import img5 from '../Assets/mocaby-person1.jpg'
import '../CSS/Gallary.css'


const Gallery = () => {
  return (

    <section className='gallary'>
        <div className='gallary-container'>
            <div className='gala-head'>
                <h4>Expert Guidance for Ambitious Leaders</h4>
                <p>Meet our team of seasoned strategists, dedicated to helping you navigate complexity and unlock sustainable growth.</p>
            </div> 
            <div className='gallary-grid'>
                <div className='gallary-item'>
                    <img src={img1}alt="" />
                    <img src={img3}alt="" />
                    <img src={img5}alt="" />
                </div>
                <div className='gallary-item2'>
                    <img id='flags' src={img4}alt="" />
                    <img src={img2}alt="" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Gallery