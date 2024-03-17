import React, { useState, useEffect } from 'react';
import "../../CSS/UserSetting/UserSetting.css"
import { useNavigate } from 'react-router-dom';

export default function UserSettings() {
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    // Initialize state for all the input fields
    const [username, setUsername] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [newChanges, setChanges] = useState({});
    const routePath = "/users/updateUser";
    const [header, setHeader] = useState({});

    useEffect(() => {
        document.title = "OLLI User Settings";
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            const temp = JSON.parse(storedUser)
            setChanges(temp.user)
        }
    }, []);

    useEffect(() => {
        if (user && newChanges) {
            setHeader({
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${user.accessToken}`
                },
                body: JSON.stringify(newChanges),
            });
        }
    }, [newChanges]);

    async function fetchUser() {
        const response = await fetch(`/users/getUser/${user.user.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${user.accessToken}`
            }
        });

        if (!response.ok) {
            setErrorMessage("Server Error");
            return;
        }
        let userData = await response.json();
        if (userData) {
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
        } else {
            setErrorMessage("Failed to load User Data");
        }
    }

    async function handleChanges() {
        if (newPassword !== confirmPassword) {
            setErrorMessage("Passwords Do not Match");
            return;
        }
        const response = await fetch(routePath, header);
        if (!response.ok) {
            setErrorMessage(`Could Not Update to ${user.username}`);
            return;
        }
        const data = await response.json();
        if (data.error) {
            setErrorMessage("Could not Update");
            return;
        } else {
            setErrorMessage("Update Successful");
            fetchUser();
            //wait  for 1 sec then go back to  dashboard page
            //setTimeout(() => navigate("/parentPage"), 1000);
        }
    }

    const Sanitizer = (event, setFunc, regex) => {
        const userInput = event.target.value;
        const sanitizedInput = userInput.replace(regex, '');
        setFunc(sanitizedInput);
        setChanges((prev) => {
            if (sanitizedInput) {
                return { ...prev, [event.target.name]: sanitizedInput };
            } else {
                return user.user;
            }
        });
    }

    const Sanitizer2 = (event, setFunc, regex) => {
        const userInput = event.target.value;
        const sanitizedInput = userInput.replace(regex, '');
        setFunc(sanitizedInput);
    }

    return (
        <div className="user-settings-container">
            <h1>User Settings</h1>

            <div className="form-group">
                <h2>Change Username</h2>
                <label htmlFor="username">Username:</label>
                <input type="user" name="username" placeholder="Username" value={username} maxLength="30" onChange={(event) => Sanitizer(event, setUsername, /[^a-zA-Z0-9]/)} />
                <button onClick={handleChanges}>Update Username</button>
            </div>

            <div className="form-group">
                <h2>Change Password</h2>
                <label>Current Password:</label>
                <input type="password" name="current-password" placeholder='Enter Current Password' maxLength="30" value={currentPassword} onChange={(event) => Sanitizer2(event, setCurrentPassword, /[^a-zA-Z0-9]/)} />
                <label>New Password:</label>
                <input type="password" name="password" placeholder='Enter New Password' value={newPassword} maxLength="30" onChange={(event) => Sanitizer(event, setNewPassword, /[^a-zA-Z0-9]/)} />
                <label>Confirm New Password:</label>
                <input type="password" name="confirm-password" placeholder='Re-Enter New Password' maxLength="30" value={confirmPassword} onChange={(event) => Sanitizer2(event, setConfirmPassword, /[^a-zA-Z0-9]/)} />
                <button onClick={handleChanges}>Update Password</button>
            </div>

            <div className="form-group">
                <h2>Phone Number</h2>
                <label>Phone Number:</label>
                <input type="tel" name="phone_number" placeholder="Enter Phone Number" maxLength="30" value={phoneNumber} onChange={(event) => Sanitizer(event, setPhoneNumber, /[^0-9]/)} />
                <button onClick={handleChanges}>Update Phone Number</button>
            </div>

            <h3>{errorMessage}</h3>
        </div>
    );
}
