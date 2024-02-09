import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../CSS/Login/Login.css';
import imageSrc from "../../CSS/Login/im1.png"; // Import your image source


function LoginPage() {
  useEffect(() => {
    AOS.init({
      once: false, // Keep animations on subsequent visits to the page
      duration: 800 // Set the duration to 800 milliseconds (you can adjust this number)
    });
  }, []); // Run only once after the component mounts

  // State variables for email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <div data-aos="fade-right" className="stripe-pattern"></div>
      <div className="login-form">
        <div className="logo-container">
          <img data-aos="fade-down" src={imageSrc} alt="Logo" className="logo" />
          <h1 data-aos="fade-up">O.L.L.I</h1>
        </div>
        <p data-aos="fade-up">Welcome back!</p>
        <input
          data-aos="fade-up"
          type="email"
          placeholder="Enter your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Call handleEmailChange when input changes
        />
        <input
          data-aos="fade-up"
          type="password"
          placeholder="Enter your password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Call handlePasswordChange when input changes
        />
        <div className="remember-me">
          <a data-aos="fade-up">Reset password</a>
        </div>
        <button data-aos="fade-up">Sign in</button>
        <hr data-aos="fade-up" className="divider" /> {/* Horizontal line */}
        <button data-aos="fade-up" className="sign-in-with-images-btn">Sign in with Images</button> {/* Sign in with Images button */}
        <div className="sign-up">
          <p data-aos="fade-up">Don’t have an account?</p>
          <a data-aos="fade-up">Sign up</a>
        </div>
        {/* Social Media Login */}
        {/* You can replace '#' with actual links */}
      </div>
    </div>
  );
};

export default LoginPage;
