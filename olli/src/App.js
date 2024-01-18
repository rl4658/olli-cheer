import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestUserBar from './components/NavBars/GuestUserBar.js';
import NewsletterCreator from './components/NewsLetters/NewsletterCreator.js';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import 'react-image-gallery/styles/css/image-gallery.css';
import './CSS/ImageSlider/ImageSlider.css'
import ImageSlider from './components/ImageSlider/ImageSlider.js';
import AboutUs from './components/AboutUS/AboutUsSection.js';



export default function App() {

  return (
    <Router>

      <GuestUserBar>
      </GuestUserBar>

      <Routes>
        <Route
          exact path='/'
          element={<div className='imageSliderContainer'>
            <div className='imageSlider'>
              <ImageSlider />
            </div>
          </div>}>
        </Route>

        <Route
          exact path="/Newsletters"
          element={
            <DndProvider backend={HTML5Backend}>
              <NewsletterCreator />
            </DndProvider>
          }
        />
        <Route
          exact path="/about-us"
          element={<AboutUs />}
        />
      </Routes>

    </Router>
  )

}