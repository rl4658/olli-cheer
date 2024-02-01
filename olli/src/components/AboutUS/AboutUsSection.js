import React from 'react';
import '../../CSS/AboutUs/AboutUs.css'; // css file

const AboutUs = () => {
 return (
    <div className="about-us-container">
      <div className="content-container">
        <div className="image-container">
          <img src={require("./cheerconnections.png")} />
        </div>
        <div className="mission-statement">
          <h1 className="heading">Welcome to Our World of Care</h1>
          <p>
            At Ongoing Living & Learning Inc. (OLLI), we are dedicated to creating
            an inclusive community and a circle of friendship. We focus on
            empowering and enriching the lives of individuals with intellectual
            disabilities and their families through development, social
            recreation, and community integration opportunities.
          </p>
        </div>
      </div>
    </div>
 );
};

export default AboutUs;