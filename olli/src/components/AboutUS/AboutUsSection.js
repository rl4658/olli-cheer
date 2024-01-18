import React from 'react';
 // Assuming you have a CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="mission-statement">
        <h2>Mission Statement</h2>
        <p>Our mission is to support individuals with intellectual disabilities by providing inclusive programs focused on development and community integration. We believe in empowering our participants through various initiatives.</p>
      </section>

      <section className="programs-overview">
        <h2>Our Programs</h2>
        <div className="program">
          <h3>Cheer Group</h3>
          <p>Description of the Cheer Group program...</p>
        </div>
        <div className="program">
          <h3>Cheer Works</h3>
          <p>Description of the Cheer Works program...</p>
        </div>
        <div className="program">
          <h3>Cheer Connections</h3>
          <p>Description of the Cheer Connections program...</p>
        </div>
        <div className="program">
          <h3>Cheer Living</h3>
          <p>Description of the Cheer Living program...</p>
        </div>
      </section>

      <section className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: contact@example.com</p>
        <p>Follow us on Facebook: [Facebook Link]</p>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <p>"A testimonial from a participant or caregiver..."</p>
        <p>"Another testimonial..."</p>
      </section>

      <footer className="about-footer">
        <p>Additional links, acknowledgments, and legal information here.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
