import React from "react";
import NavBar from "./NavBar.js";
import NavButton from "./NavButton.js";

export default function GuestUserBar() {
    const buttons = [
        <NavButton key="1" name="Home" linkTo="/" />,
        <NavButton key="2" name="Calendar" linkTo="/calendar" />,
        <NavButton key="3" name="About Us" linkTo="about-us-container" scrollLink={true} />,
        <NavButton key="4" name="Contact Us" linkTo="ContactUsDiv" scrollLink={true} />,
        <NavButton key="5" name="Events" linkTo="eventSection" scrollLink={true} />,
        <NavButton key="6" name="News" linkTo="news" scrollLink={true} />,

    ]
    return (
        <NavBar userSpecificButtons={buttons}></NavBar>

    );

}