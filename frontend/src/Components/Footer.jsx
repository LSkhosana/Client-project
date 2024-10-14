import React from "react";
// import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import '../CSS/Footer.css'
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <section className="footer-section">
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          {/* <img src={Logo} alt="" /> */}
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">

        
        <div className="footer-section-columns">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <span>Setvices</span>
          <span>Free Quote</span>
        </div>
        <div className="footer-section-columns">
          <span>+27-64-801-6144</span>
          <span>kms@mocaby.co.za</span>
          <span>Keenan Smith</span>
          <span>Mocaby and Co</span>
        </div>
        <div className="footer-section-columns">
          <span>173 Oxford Rd Rosebank</span>
          <span>Johannesburg</span>
          <span>2196</span>

        </div>
      </div>
    </div>
    </section>
  );
};

export default Footer;
