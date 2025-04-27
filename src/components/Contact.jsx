import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../css/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Left Part */}
        <div className="contact-left">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p><FaEnvelope className="icon" /> support@pixelsage.com</p>
            <p><FaMapMarkerAlt className="icon" /> Ballia, Uttar Pradesh, India</p>
          </div>

          {/* Subscribe Box */}
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Submit</button>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Middle Part */}
        <div className="contact-middle">
          <h3>Links & Resources</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Part */}
        <div className="contact-right">
          <h3>Careers & Policies</h3>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Contact;
