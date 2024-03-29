import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import NavButton from './NavButton'
export default function StaffNavBar() {
    const [user, setUser] = useState()
    const buttons = [
        <NavButton
            name={"Chat"}
            linkTo={"/chat"}
            scrollLink={false}
        />,
        <NavButton
            name={"User Settings"}
            linkTo={"/parentuserSettings"}
            scrollLink={false}
        />
    ]
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, [])
    return (
        <div>
            <NavBar userSpecificButtons={buttons} user={user} />

        </div>
    )
}

