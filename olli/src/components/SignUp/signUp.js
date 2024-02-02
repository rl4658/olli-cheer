import React from 'react';
import '../../CSS/SignUp/SignUp.css'; 


const SignUpPage = () => {
  return (
    <div className="signup-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username"  placeholder="Enter your username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />

          <button type="submit">Login</button>
        </form>
      </div>

      <div className="signup-link">
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default SignUpPage;
