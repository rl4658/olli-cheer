import React from 'react'
import NavBar from "./NavBar.js";
import NavButton from "./NavButton.js";

export default function ParentNavBar({ user }) {
    const buttons = [
        <NavButton
            name={"Calender"}
            linkTo={"/calender"}
            scrollLink={false}
        />,
        <NavButton
            name={"My Family Members"}
            linkTo={"/manageSNContainer"}
            scrollLink={true}
        />,
        <NavButton
            name={"User Settings"}
            linkTo={"/userSettings"}
            scrollLink={false}
        />,
        <NavButton
            name={"Manage Users"}
            linkTo={"/manageUsers"}
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
