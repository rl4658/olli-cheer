import React from 'react';
import '../../../CSS/AboutUs/AboutUs.css'; // css file
import image4 from "./image4.png"; // Import the image

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="content-container">
        <div className="about-image-container">
          <img data-aos="fade-up" data-aos-once="true" src={image4} alt="Vision" />
          <div data-aos="fade-up" data-aos-once="true" className="about-text-container">
            <p data-aos="fade-up" data-aos-once="true" className="olli"> O.L.L.I</p>
            <hr data-aos="fade-up" data-aos-once="true" className="about-divider" />
            <h1 data-aos="fade-up" data-aos-once="true" className="heading">Our Vision</h1>
            <div className="mission-statement">
              <p data-aos="fade-up" data-aos-once="true">
                "We believe in empowering and enriching the lives of individuals with intellectual
                disabilities and their families through development, social
                recreation, and community integration opportunities."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
