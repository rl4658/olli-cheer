import React, { createContext, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';
import './CSS/ImageSlider/ImageSlider.css'
import HomePage from './components/Pages/HomePage.js';
import Login from './components/Login/login.js';
import SignUpPage from './components/SignUp/signUp.js';
import SNLogin from './components/SignUp/SNLogin.js';
export const UserContext = createContext()
export default function App() {
  const [user, setUser] = useState(null)


  return (




    <Router>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
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
          <Route
            exact path='/snlogin'
            element={
              <SNLogin />
            } />


        </Routes>
      </UserContext.Provider>
    </Router>

  )

}

