import React, { useRef, useState, useEffect } from 'react';
import '../CSS/Services.css'
import debt from '../Assets/debt.png'
import management from '../Assets/consultation (2).png'
import payroll from '../Assets/calculator.png'
import people from '../Assets/network.png'
import recruitement from '../Assets/recruitment.png'
import human from '../Assets/human-resources.png'


const Services = () => {
    const servicesRef = useRef(null);
    const [inView, setInView] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setInView(entry.isIntersecting);
          });
        },
        { threshold: 0.1 } // Adjust threshold as needed
      );
  
      if (servicesRef.current) {
        observer.observe(servicesRef.current);
      }
  
      return () => {
        if (servicesRef.current) {
          observer.unobserve(servicesRef.current);
        }
      };
    }, []);
  
    return (
      <section ref={servicesRef} className={`services ${inView ? 'in-view' : ''}`}>
        <div className='service-container'>
            <div className='service-head'>
                <h4 id='serv'>We Provide Solutions For Your <br/>Business</h4>
            </div>
            <div className='service-cards'>
                <div className='service-card'>
                    <div className='service-icon'>
                        <img src={debt} alt='debt' />
                    </div>
                    <div className='service-text'>
                        <h5>Debt Collecting</h5>
                        <p>
                         With a proven track record of success, 
                         we deliver effective and ethical debt collection solutions to clients across multiple industries,
                         built on a foundation of integrity and results-driven expertise.
                        </p>

                    </div>
                </div>

                <div className='service-card'>
                    <div className='service-icon'>
                        <img src={management} alt='debt' />
                    </div>
                    <div className='service-text'>
                        <h5>Management Consulting
                        </h5>
                        <p>
                        We help businesses thrive with personalized consulting services, 
                        strategic planning, and operational expertise. Trust our team of expert 
                        management consultants to drive growth, improve profitability, and overcome challenges.
                        </p>

                    </div>
                </div>

                <div className='service-card'>
                    <div className='service-icon'>
                        <img src={payroll} alt='debt' />
                    </div>
                    <div className='service-text'>
                        <h5>Payroll Management</h5>
                        <p>
                        Unlock your business potential with our comprehensive payroll solutions. 
                        We handle everything from leave management to employee data, 
                        ensuring accuracy and compliance.
                        </p>

                    </div>
                </div>
            </div>





            {/* second row */}
            <div className='service-cards'>
                <div className='service-card'>
                    <div className='service-icon'>
                        <img src={people} alt='debt' />
                    </div>
                    <div className='service-text'>
                        <h5>People Operations</h5>
                        <p>
                        Our people operations services encompass workforce planning,
                        employee engagement, HR analytics, and more 
                        to create a seamless HR experience. 
                        </p>

                    </div>
                </div>

                <div className='service-card'>
                    <div className='service-icon'>
                        <img src={recruitement} alt='debt' />
                    </div>
                    <div className='service-text'>
                        <h5>Recruitment
                        </h5>
                        <p>
                        Expert recruitment services tailored to your needs, 
                        from job profiling to candidate placement, at competitive rates. 
                        Our team is dedicated to finding the perfect talent for your organization.                       
                        </p>

                    </div>
                </div>

                <div className='service-card'>
                    <div className='service-icon'>
                        <img src={human} alt='debt' />
                    </div>
                    <div className='service-text'>
                        <h5>HR Management</h5>
                        <p>
                        We offer a comprehensive suite of HR services, 
                        including employee onboarding, performance management, 
                        training and development, and HR compliance, to help businesses thrive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services