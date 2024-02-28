import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import SignUpPage from '../SignUp/signUp';

import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../CSS/Login/Login.css';
import imageSrc from "../../CSS/Login/im1.png";

function LoginPage({ setUser }) {
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()


  useEffect(() => {
    AOS.init({
      once: false,
      duration: 800
    });
  }, []);

  useEffect(() => {
    setIsVisible(true);

  }, []);
  useEffect(() => {


  }, [email]);

  const handleSignUpClick = () => {
    setIsSignUpClicked(true);
  };

  const handleLoginClick = () => {
    setIsSignUpClicked(false); // Move back to the login form
  };

  async function handleLogin() {

    const response = await fetch(`/login/${email}/${password}`)


    if (!response.ok) {
      const errorData = await response.json();
      alert("Cannot Login");
      return;
    }

    const user = await response.json()
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user)


    if (user.user.user_type === "sn") navigate("/sn")
    if (user.user.user_type === "parent") navigate("/parentPage")
    if (user.user.user_type === "admin") navigate("/adminPage")
    if (user.user.user_type === "staff") navigate("/staff")
  }

  const EmailSanitizer = (event, setFunc) => {
    // Sanitization logic
    const userInput = event.target.value;
    const sanitizedInput = userInput.replace(/[^a-zA-Z0-9@._-]/g, '');
    setFunc(sanitizedInput);
  };
  const ANSanitizer = (event, setFunc) => {
    // Sanitization logic
    const userInput = event.target.value;
    const sanitizedInput = userInput.replace(/[^a-zA-Z0-9!@#$*_]/g, '');
    setFunc(sanitizedInput);
  };
  return (
    <div>
      <div className="login-container">
        <div className={`signup-page ${isSignUpClicked ? 'move-right' : ''}`}>
          <SignUpPage onLoginClick={handleLoginClick} />
        </div>
        <div className={`stripe-pattern ${(isVisible && !isSignUpClicked) ? 'mounted' : ''}${isSignUpClicked ? 'move-right' : ''}`}></div>
        <div className={`login-form ${isSignUpClicked ? 'move-right' : ''}`}>
          <div className="logo-container">
            <img data-aos="fade-right" src={imageSrc} alt="Logo" className="logo" />
            <h1 data-aos="fade-right">O.L.L.I</h1>
          </div>
          <p data-aos="fade-right">Welcome back!</p>


          <input
            data-aos="fade-right"
            id="email1"
            type="email"
            placeholder="Enter your email here"
            value={email}
            maxLength="30"
            onChange={(e) => EmailSanitizer(e, setEmail)}
          />
          <input
            data-aos="fade-right"
            id='pass1'
            maxLength="30"
            type="password"
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => ANSanitizer(e, setPassword)}
          />


          <div className="remember-me">
            <a data-aos="fade-right">Reset password</a>
          </div>
          <button data-aos="fade-right" onClick={handleLogin}>Sign in</button>
          <hr data-aos="fade-right" className="divider" />
          <button data-aos="fade-right" className="sign-in-with-images-btn">Sign in with Images</button>
          <div className="sign-up">
            <p data-aos="fade-right">Don’t have an account?</p>
            <a data-aos="fade-right" onClick={handleSignUpClick}>Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
