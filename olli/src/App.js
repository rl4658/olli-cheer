import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import './CSS/ImageSlider/ImageSlider.css'
import HomePage from './components/Pages/HomePage.js';
import Login from './components/Login/login.js';
import SignUpPage from './components/SignUp/signUp.js';

export default function App() {

  return (
    <Router>
      <Routes>

        <Route exact path='/login'
          element={
            <div className='loginSection'>
              <Login />


            </div>} />





        <Route
          exact path='/'
          element={
            <HomePage />
          } />


      </Routes>
    </Router>
  )
}