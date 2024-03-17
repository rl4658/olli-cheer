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
            linkTo={"manageSNContainer"}
            scrollLink={true}
        />,
        <NavButton
            name={"User Settings"}
            linkTo={"/parentuserSettings"}
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
