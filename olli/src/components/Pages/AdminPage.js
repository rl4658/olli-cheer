import React, { useEffect, useState } from 'react'
import AdminNavBar from '../NavBars/AdminNavBar'
import ManageUsers from '../AdminComponents/ManageUsers'
// import SNUpdater from '../AdminComponents/SNUpdater'


export default function AdminPage() {
    const [snUsers, setSNUsers] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [user, setUser] = useState([])

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



    return (
        <div>

            <AdminNavBar user={user} />

			<ManageUsers /> 

            {/* <ParentNavBar user={user} />

            <div className='manageSNContainer'>
                <h1>Manage My Family</h1>
                {snUsers.map((sn, index) => (
                    <SNUpdater key={index} sn={sn} user={user} setSNUsers={setSNUsers} setUser={setUser} />
                ))}
                <p>{errorMessage}</p>
            </div> */}

        </div>
    )
}
