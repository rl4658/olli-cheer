import React from 'react'

export default function StaffCard({ email, name, wage, clockIn, clockOut, url }) {
    return (
        <div>
            <h1>{name}</h1>
            <img src={url} alt="" />
            <p>
                Email: {email} Wage: {wage}  TimeIn: {clockIn} TimeOut: {clockOut}
            </p>
        </div>
    )
}
