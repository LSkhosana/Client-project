import React, { useEffect, useRef } from 'react';
import about from '../Assets/Hero.png';
import '../CSS/About.css';
import card from '../Assets/card.png';
import bcase from '../Assets/case.png';

const About = () => {
    const aboutRef = useRef(null); // Create a ref for the about section

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the 'visible' class when the section is in view
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing after it becomes visible
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the section is in view
        });

        if (aboutRef.current) {
            observer.observe(aboutRef.current); // Start observing the section
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current); // Clean up observer on unmount
            }
        };
    }, []);

    return (
        <section className='about' ref={aboutRef}>
            <div className='about-container'>
                <div className='about-img'>
                    <img src={about} alt='about' />
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
                            <img src={card} alt='card icon' />
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
                            <img src={bcase} alt='card icon' />
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
    );
}

export default About;
