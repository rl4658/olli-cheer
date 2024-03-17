import React, { useEffect, useState } from 'react'

export default function ManageNewsletters() {
    const [newsletter, setNewsletter] = useState([])

    return (
        <div>

            <h1> Manage Newsletters</h1>


            <h2>Current NewsLetters</h2>


            <h2>Upload Newsletter</h2>
            <input type="file" />

        </div>
    )
}
