import React from 'react';
import '../css/AboutUs.css';
import teamImage from '../assets/BFG.png'; // Make sure the image path is correct

const AboutUs = () => {
  return (
    <section id="aboutus" className="about-us-section">
      <div className="about-us-container">
        {/* Left Section: Image */}
        <div className="about-us-image">
          <img src={teamImage} alt="Team" />
        </div>

        {/* Right Section: Content */}
        <div className="about-us-content">
          <h2 className="about-us-title">About Us</h2>
          <p className="about-us-subtitle">We bring your vision to life with passion and creativity</p>
          <p className="about-us-description">
            At Pixelsage, we specialize in delivering exceptional gaming experiences. From Game Development to Art & Design, our expert team is dedicated to pushing the boundaries of innovation.
            Our goal is to create experiences that resonate with players, challenge their imagination, and set new standards in the gaming industry.
          </p>

          {/* Key Highlights */}
          <div className="about-us-highlights">
            <div className="highlight">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="highlight">
              <h3>200+</h3>
              <p>Successful Projects</p>
            </div>
            <div className="highlight">
              <h3>50+</h3>
              <p>Global Clients</p>
            </div>
          </div>

          {/* Call to Action */}
          <button className="cta-button">Get In Touch</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
