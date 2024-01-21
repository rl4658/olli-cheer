import React from "react";
import NavBar from "./NavBar.js";
import NavButton from "./NavButton.js";

export default function GuestUserBar(){
    const buttons = [
        <NavButton key="1" name="Home" linkTo="/" />,
        <NavButton key="2" name="Calendar" linkTo="/calendar" />,
        <NavButton key="3" name="About Us" linkTo="" scrollLink={true} />,
        <NavButton key="4" name="Contact Us" linkTo="" scrollLink={true} />,
        <NavButton key='5' name="Newsletters" linkTo="Newsletters" scrollLink ={false}/>,
    ]
return(
<NavBar userSpecificButtons={buttons}></NavBar>

);

}