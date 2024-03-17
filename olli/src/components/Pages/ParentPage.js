import React, { useEffect, useState } from 'react'
import ParentNavBar from '../NavBars/ParentNavBar'
import SNUpdater from '../ParentComponents/SNUpdater'
import "./parent.css"

export default function ParentPage() {
    const [snUsers, setSNUsers] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [user, setUser] = useState([])
    const [lastSN, setlastSN] = useState(false)

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
            <ParentNavBar user={user} />
            <div className='manageSNContainer'>
                <h1>Manage My Family</h1>
                {console.log(snUsers)}
                {snUsers.map((sn, index) => (
                    <SNUpdater key={index} sn={sn} user={user} setSNUsers={setSNUsers} setUser={setUser} snUsers={snUsers} lastSN={lastSN} />
                ))}
                <p>{errorMessage}</p>
            </div>
        </div>
    )
}