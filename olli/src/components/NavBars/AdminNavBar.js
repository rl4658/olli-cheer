import React from 'react';
import NavBar from './NavBar.js';
import NavButton from './NavButton.js';

export default function AdminNavBar({ onNavButtonClick }) {
    const buttons = [
        <NavButton
            name={"Manage Users"}
            onClick={() => onNavButtonClick('ManageUsers')}
            scrollLink={false}
        />,
        <NavButton
            name={"Calendar"}
            onClick={() => onNavButtonClick('Calendar')}
            scrollLink={false}
        />,
        <NavButton
            name={"User Settings"}
            onClick={() => onNavButtonClick('UserSettings')}
            scrollLink={false}
        />
        // Add more NavButton components as needed for other functionalities
    ];

    return (
        <NavBar
            userSpecificButtons={buttons}

        />
    )
}
