import React, { useState } from 'react';
import NavButton from "./NavButton";
import "../../CSS/NavBar/NavBar.css";

export default function NavBar({ userSpecificButtons, style }) {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div>
      <div className={`burgerMenu ${isBurgerMenuOpen ? 'open' : ''}`} onClick={toggleBurgerMenu}>
        <div className={`burgerIcon ${isBurgerMenuOpen ? 'open1' : ''}`}></div>
        <div className={`burgerIcon ${isBurgerMenuOpen ? 'open2' : ''}`}></div>
        <div className={`burgerIcon ${isBurgerMenuOpen ? 'open3' : ''}`}></div>
      </div>

      <div className={`navBar ${isBurgerMenuOpen ? 'hidden' : ''}`} style={style}>
        <a href="/"><img className='olliLogo' src={require("./OLLILOGO.png")} alt="OLLI Logo" style={{ backgroundColor: 'transparent' }}></img></a>

        <div className={`homeLink ${isBurgerMenuOpen ? 'hidden' : ''}`}>
          <NavButton name="O.L.L.I" linkTo="/"></NavButton>
        </div>

        <div className='userSpecificButtons'>
          {userSpecificButtons.map((button, index) => (
            <React.Fragment key={index}>
              {button}
            </React.Fragment>
          ))}
        </div>

        <div className='loginButton'>
          <NavButton name="Login" linkTo="/login"></NavButton>
        </div>

        <div className='signUpButton'>
          <NavButton name="Sign Up" linkTo="signUp"></NavButton>
        </div>
      </div>

      {/* Side Menu HTML */}
      <div className={`sideMenu ${isBurgerMenuOpen ? 'open' : ''}`}>
        
        
        <div className='userSpecificButtons'>
          {userSpecificButtons.map((button, index) => (
            <React.Fragment key={index}>
              {button}
            </React.Fragment>
          ))}
        </div>

        <div className='login'>
          <NavButton name="Login" linkTo="/login"></NavButton>
        </div>

        <div className='signUp'>
          <NavButton name="Sign Up" linkTo="signUp"></NavButton>
        </div>

      </div>
    </div>
  );
}

