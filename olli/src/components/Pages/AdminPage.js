import React, { useEffect, useState } from 'react'
import AdminNavBar from '../NavBars/AdminNavBar'
import ManageUsers from '../AdminComponents/ManageUsers'
// import Calendar from '../Calendar'; // Import the Calendar component
// import UserSettings from '../UserSettings'; // Import the UserSettings component

export default function AdminPage() {
    const [snUsers, setSNUsers] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [user, setUser] = useState([])
    const [activeComponent, setActiveComponent] = useState('ManageUsers');

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
        });
        if (!response.ok) {
            setErrorMessage("You Have No Registered Members");
            return;
        }
        const data = await response.json();
        if (data.error) {
            setErrorMessage("You Have No Registered Members");
            return;
        }
        setSNUsers(data);
    };

    const handleNavButtonClick = (componentName) => {
        setActiveComponent(componentName);
    };

    function renderComponent() {
        switch (activeComponent) {
            case 'ManageUsers':
                return <ManageUsers snUsers={snUsers} />;
            // Uncomment and update the following lines according to your actual component names and props
            // case 'Calendar':
            //     return <Calendar />;
            // case 'UserSettings':
            //     return <UserSettings user={user} />;
            default:
                return <ManageUsers snUsers={snUsers} />; // Fallback or default case
        }
    }

    return (
        <div className='admin-page'>
            <AdminNavBar user={user} onNavButtonClick={handleNavButtonClick} />
            {renderComponent()}
        </div>
    );
}