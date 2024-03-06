import React, { useEffect, useState } from 'react'
import AdminNavBar from '../NavBars/AdminNavBar'
import ManageUsers from '../AdminComponents/ManageUsers'
// import Calendar from '../Calendar'; // Import the Calendar component
// import UserSettings from '../UserSettings'; // Import the UserSettings component

export default function AdminPage() {
    const [snUsers, setSNUsers] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [user, setUser] = useState([])
    const [activeComponent, setActiveComponent] = useState('ManageUsers'); // default component that is mounted is manage users. 

    // this gives sets the user in the hook. 
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    useEffect(() => {
        if (user && user.user && user.user.email) {
            fetchSN().catch(console.error);
        }
    }, [user]);


    const fetchSN = async () => {
        const response = await fetch(`/parentalControls/getSNOfParent/${user.user.email}`, {
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user.accessToken}`,
            }
        })
        if (!response.ok) {
            setErrorMessage("You Have No Registered Members")
            return
        }
        const data = await response.json()
        if (data.error) {
            setErrorMessage("You Have No Registered Members")
            return
        }
        setSNUsers(data)
    }


    const handleNavButtonClick = (componentName) => {
        setActiveComponent(componentName);
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'ManageUsers':
                return <ManageUsers />;
            // case 'Calendar':
            //     return <Calendar />;
            // case 'UserSettings':
            //     return <UserSettings />;
            // Add more cases for other components if needed
            default:
                return null;
        }
    };






    return (
        <div>

            <AdminNavBar user={user} onNavButtonClick={handleNavButtonClick} />
            {renderComponent()}

        </div>
    )
}
