import React from 'react';
import NavButton from "./NavButton";
import { Link } from "react-router-dom";
import "../../CSS/NavBar/NavBar.css"

export default function NavBar({userSpecificButtons, style}){

return(
 <div className='bg-gray-200 p-4 container mx-auto flex justify-between items-center' style={style} >
    <a href="/"><img className='olliLogo' src={require("./OLLILOGO.png")} style={{backgroundColor: 'transparent'}}></img></a>

    <div className='homeLink'>
      <NavButton name = "OLLI" linkTo = "/home">
      
      </NavButton>
    </div>


    <div className='userSpecificButtons'>
        {userSpecificButtons.map((button, index) => (
          <React.Fragment key={index}>
            {button}
          </React.Fragment>
        ))}
      </div>

    <div className='loginButton'>
    <NavButton name ="Login" linkTo="/login">
      
    </NavButton>
    </div>

    <div className='signUpButton'>
      <NavButton name="Sign Up" linkTo="signUp">
        
      </NavButton>
    </div>

 </div>
)

}