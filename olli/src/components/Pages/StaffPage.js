import React, { useEffect } from 'react'
import StaffNavBar from '../NavBars/StaffNavBar'
export default function StaffPage() {


    async function fetcher(url, method, accessToken, body, setter, errorHandler) {
        let response;
        if (method === "GET") {
            response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${accessToken}`
                },

            })
        }
        else {
            response = await fetch(url, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(body)
            })
        }

        if (!response.ok) {
            errorHandler()
            return;
        }
        else if (setter) {
            const data = await response.json()
            setter(data)
        }
    }
    return (
        <div>
            <StaffNavBar />
            <br />
            <br />
            <h1>Clock In</h1>

            <h2>Clock Out</h2>
        </div>
    )
}
