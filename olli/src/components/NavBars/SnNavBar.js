import React from 'react'
import NavBar from "./NavBar.js";
import NavButton from "./NavButton.js";

export default function SnNavBar({ user }) {
    const buttons = [
        <NavButton
            name={"Calender"}
            linkTo={"/calender"}
            scrollLink={false}
        />,
        <NavButton
            name={"Game"}
            linkTo={"game-container"}
            scrollLink={true}
        />,
        <NavButton
            name={"Chat"}
            linkTo={"/chat"}
            scrollLink={false}
        />
    ]

    return (
        <NavBar
            userSpecificButtons={buttons}
            user={user}
        />
    )
}
