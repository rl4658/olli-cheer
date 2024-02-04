import React from 'react';
import '../../CSS/AboutUs/AboutUs.css'; // css file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="content-container">
        <div className="text-container">
          <h1 data-aos="fade-right" className="heading">Our Vision</h1>
        </div>
        <div className="mission-statement">
          <p data-aos="fade-left">
            We believe in empowering and enriching the lives of individuals with intellectual
            disabilities and their families through development, social
            recreation, and community integration opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
