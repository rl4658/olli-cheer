import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GuestUserBar from './components/NavBars/GuestUserBar.js';
import NewsletterCreator from './components/NewsLetters/NewsletterCreator.js'; 
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {images} from "./components/ImageSlider/Images.js"
import ImageGallery from 'react-image-gallery';


export default function App(){
return(
<Router>


<GuestUserBar></GuestUserBar>
  <Routes>
    <Route
  exact path='/'
  element= {<div className='imageSlider'><ImageGallery items={images} autoPlay={true} /></div>}>

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
