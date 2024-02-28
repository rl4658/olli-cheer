import React, { useState, useEffect, useCallback } from 'react'

export default function SNUpdater({ sn, user, setSNUsers }) {
    const [SNUsername, setSNUsername] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);
    const pureURLS = ["../../assets/SnImages/lion.png", "../../assets/SnImages/bear.png", "../../assets/SnImages/panda.png", "../../assets/SnImages/moose.png", "../../assets/SnImages/sheep.png", "../../assets/SnImages/tiger.png"]
    const animalURLs = [require("../../assets/SnImages/lion.png"), require("../../assets/SnImages/bear.png"), require("../../assets/SnImages/panda.png"), require("../../assets/SnImages/moose.png"), require("../../assets/SnImages/sheep.png"), require("../../assets/SnImages/tiger.png")]
    const [errorMessage, setErrorMessage] = useState('')


    const fetchSN = useCallback(async () => {

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

    }, [user])

    async function handleUpdate() {
        let image1 = sn.image1
        let image2 = sn.image2


        if (selectedImages.length == 1) {

            setErrorMessage("You Must Select Two Images")
            return

        }
        if (selectedImages.length === 2) {
            image1 = selectedImages[0].url
            image2 = selectedImages[0].url
        }
        console.log(image1)
        console.log(image2)
        console.log(SNUsername)
        console.log(user.user.email)
        const response = await fetch(`/parentalControls/updateSN`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user.accessToken}`
            },
            body: JSON.stringify({ email: user.user.email, username: SNUsername, image1: image1, image2: image2, fName: sn.firstNameSN, lName: sn.lastNameSN }),
        });
        if (!response.ok) {
            setErrorMessage(`Could Not Update to ${SNUsername}`)
            return
        }

        const data = await response.json()
        console.log(data)
        if (data.error) {
            setErrorMessage(`Could Not Update to ${SNUsername}`)
            return
        }
        setErrorMessage(`Updated ${SNUsername}`)
        fetchSN()

    }
    const Sanitizer = (event, setFunc, regex) => {
        // Sanitization logic
        const userInput = event.target.value;
        const sanitizedInput = userInput.replace(regex, '');
        setFunc(sanitizedInput);
    };
    const toggleImageSelection = (index, url) => {
        // Check if the image is already selected
        const isSelected = selectedImages.findIndex(image => image.index === index) !== -1;
        // If the image is not already selected and less than 2 images are selected, add it
        if (!isSelected && selectedImages.length < 2) {
            const newImageSelected = { index, url };
            setSelectedImages([...selectedImages, newImageSelected]);
            console.log(selectedImages);
        } else { // If the image is already selected, remove it
            const updatedSelectedImages = selectedImages.filter(image => image.index !== index);
            setSelectedImages(updatedSelectedImages);

        }
    };
    return (
        <div>
            <h2>{sn.firstNameSN + " " + sn.lastNameSN}</h2>
            <p>Username: {sn.username}<br />Current Password: {sn.image1.split("/")[4].split(".")[0]} and {sn.image2.split("/")[4].split(".")[0]}</p>
            <input type="text" id="username" maxLength="30" name="username" placeholder="Username"
                value={SNUsername}
                onChange={(e) => Sanitizer(e, setSNUsername, /[^a-zA-Z0-9!@#$*_]/g)}
            />
            <h3>Update Image Password</h3>
            <div id='animalPasswordPhotos'>
                {animalURLs.map((url, index) => (

                    <div
                        key={index}
                        className={selectedImages.some(image => image.index === index) ? 'animalPhoto selected' : 'animalPhoto'}
                        onClick={() => toggleImageSelection(index, pureURLS[index])}
                    >
                        <img src={(url)} />
                    </div>

                ))}
                <p>{errorMessage}</p>
                <button className="updateSN" onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}
