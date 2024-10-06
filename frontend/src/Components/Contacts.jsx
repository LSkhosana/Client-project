import React from 'react'
import '../CSS/Contacts.css'

const Contacts = () => {
  return (
    <>
    <section className='form'>
      <div className='form-block'>
        <div className='form-text'>
          <h2>Get Started Today By Filling In Your 
          Details</h2>
          <p>Fill in your details and we will get in touch with you!</p>
        </div>
        <div className='form-group'>
          <div className='form-head'>
            <label for='nameInput' className='form-label'>First Name</label>
              <div className="input-wrapper">
                <input type="text" id="nameInput" className="form-control" placeholder="Name" />
              </div> 

              <label for='nameInput' className='form-label'>Last Name:</label>
              <div className="input-wrapper">
                <input type="text" id="nameInput" className="form-control" placeholder="Surname" />
              </div> 

              <label for='nameInput' className='form-label'>Email</label>
              <div className="input-wrapper">
                <input type="text" id="nameInput" className="form-control" placeholder="example@gmail.com"/>
              </div>
              
              <textarea rows={10} type="text" placeholder="Description (optional)" />

              <button className='submit'>Submit</button>          
          </div>
        </div>


      </div>
    </section>
    </>
  )
}

export default Contacts