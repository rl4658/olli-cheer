import React from 'react';
import NavBar from './NavBar.js';
import NavButton from './NavButton.js';

export default function AdminNavBar({ onNavButtonClick }) {
    const buttons = [
        <NavButton
            name={"Manage Users"}
            // onClick={() => {
            // console.log('Manage user clicked. ');
            // onNavButtonClick('ManageUsers');
            // }}
            scrollLink={false}
            linkTo={"/adminPage"}
        />,
        <NavButton
            name={"Calendar"}
            // onClick={() =>{
            // console.log('ManageUserClicked');
            // onNavButtonClick('Calendar');
            // }}
            scrollLink={false}
            linkTo={"/calendar"}
        />,
        <NavButton
            name={"User Settings"}
            // onClick={() => onNavButtonClick('UserSettings')}
            scrollLink={false}
            // linkTo={"/UserSettings"}
        />
        // Add more NavButton components as needed for other functionalities
    ];

    return (
        <NavBar
            userSpecificButtons={buttons}
        />
    )
}
