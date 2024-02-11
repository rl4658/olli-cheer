import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import SignUpPage from '../SignUp/signUp';
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

  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpClicked(true);
  };
  useEffect(() => {
    setIsVisible(true); // Set the state to true to trigger the animation when the component mounts
  }, []);

  // State variables for email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>

      <div className="login-container">

        <div className={`stripe-pattern ${(isVisible && !isSignUpClicked) ? 'mounted' : ''}${isSignUpClicked ? 'move-right' : ''}`}></div>
        <SignUpPage />
        <div className={`login-form`}>
          <div className="logo-container">
            <img data-aos="fade-right" src={imageSrc} alt="Logo" className="logo" />
            <h1 data-aos="fade-right">O.L.L.I</h1>
          </div>
          <p data-aos="fade-right">Welcome back!</p>
          <input
            data-aos="fade-right"
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Call handleEmailChange when input changes
          />
          <input
            data-aos="fade-right"
            type="password"
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Call handlePasswordChange when input changes
          />
          <div className="remember-me">
            <a data-aos="fade-right">Reset password</a>
          </div>
          <button data-aos="fade-right">Sign in</button>
          <hr data-aos="fade-right" className="divider" /> {/* Horizontal line */}
          <button data-aos="fade-right" className="sign-in-with-images-btn">Sign in with Images</button> {/* Sign in with Images button */}
          <div className="sign-up">
            <p data-aos="fade-right">Don’t have an account?</p>
            {/* Use NavLink to navigate to /signUp */}
            <NavLink data-aos="fade-right" onClick={handleSignUpClick}>Sign up</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
