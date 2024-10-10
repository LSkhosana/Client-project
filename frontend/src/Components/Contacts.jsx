import React from 'react'
import '../CSS/Contacts.css'
import { BsEnvelope, BsPhone, BsGeoAlt } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";


const Contacts = () => {
  return (
    <>
    <section className='form'>
      <div className='form-block'>
        <div className='form-text'>
          <h2>Get Started <span style={{ color:'#ff4400' }}>Today</span> By Filling In Your 
          Details</h2>
          <div className='contact-info'>
            <p><BsEnvelope /> example@gmail.com</p>
            <p><BsPhone /> 012-567-7890</p>
            <p><BsGeoAlt /> 123 Main St, Anytown, USA 12345</p>

          <div>
            <div className='socials'>
              <FaFacebookF />
              <SiLinkedin />
              <BsTwitter/>
            </div>
              
        </div>
      </div>
      </div>
        <div className='form-group'>
          <div className='form-head'>
            <label for='nameInput' className='form-label'>First Name</label>
              <div className="input-wrapper">
                <input type="text" id="names" className="form-control" placeholder="Name" />
              </div> 

              <label for='nameInput' className='form-label'>Last Name:</label>
              <div className="input-wrapper">
                <input type="text" id="nameInput" className="form-control" placeholder="Surname" />
              </div> 

              <label for='nameInput' className='form-label'>Email</label>
              <div className="input-wrapper">
                <input type="text" id="nameInput" className="form-control" placeholder="example@gmail.com"/>
              </div>

              <label for='nameInput' className='form-label'>Phone</label>
              <div className="input-wrapper">
                <input type="number" id="nameInput" className="form-control" placeholder="+XX-XX-XXX-XXXX"/>
              </div>
              
              <textarea rows={6} type="text" placeholder="Description (optional)" />

              <button className='submit'>Submit</button>          
          </div>
        </div>


      </div>
    </section>
    </>
  )
}

export default Contacts