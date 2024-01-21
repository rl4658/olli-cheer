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
import CheerGroup from './components/AboutUS/CheerGroup.js';
import CheerConnections from './components/AboutUS/CheerConnections.js';
import CheerWorks from './components/AboutUS/CheerWorks.js';



export default function App() {

  return (
    <Router>

      <GuestUserBar />
      <Routes>
        <Route
          exact path='/'
          element={
            <div>

              <div className='imageSliderContainer'>
                <div className='imageSlider'>
                  <ImageSlider />
                </div>
              </div>

              <div className='aboutUsSection'>
                <AboutUs />
              </div>

              <div className='cheerInfo'>
                <CheerGroup />
              </div>

              <div className='cheerInfo'>
                <CheerConnections />
              </div>

              <div className='cheerInfo'>
                <CheerWorks />
              </div>


            </div>
          }>


        </Route>

        <Route
          exact path="/Newsletters"
          element={
            <DndProvider backend={HTML5Backend}>
              <NewsletterCreator />
            </DndProvider>
          }
        />

      </Routes>

    </Router>
  )

}