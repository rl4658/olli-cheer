import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestUserBar from './components/NavBars/GuestUserBar.js';
import NewsLetterSection from './components/NewsLetters/NewsletterSection.js';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'react-image-gallery/styles/css/image-gallery.css';
import './CSS/ImageSlider/ImageSlider.css'
import ImageSlider from './components/ImageSlider/ImageSlider.js';
import AboutUs from './components/AboutUS/AboutUsSection.js';
import Cheers from './components/AboutUS/Cheers.js';
import { images } from './components/ImageSlider/Images.js';
import EventSection from './components/Events/EventSection.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import Login from './components/Login/login.js';
import SignUpPage from './components/SignUp/signUp.js';

export default function App() {

  return (
    <Router>
      <Routes>

        <Route exact path='/login'
          element={
            <div>

              <div className='loginSection'>
                <Login />
              </div>
            </div>
          }
        >
        </Route>
        <Route exact path='/signUp'
          element={
            <div>

              <div className='signUpSection'>
                <SignUpPage />
              </div>
            </div>
          }
        >
        </Route>

        <Route
          exact path='/'
          element={
            <div>
              <GuestUserBar />
              <ImageSlider
                imageURLs={images}
              />
              <div className='aboutUsSection'>
                <AboutUs />

              </div>

              <div className='cheers-container'>
                <Cheers />
              </div>

              <div className='news'>
                <NewsLetterSection />
              </div>
              <EventSection />
              <div className='contactUs'>
                <ContactUs />
              </div>
            </div>
          }>
        </Route>
        
      </Routes>
    </Router>
  )
}