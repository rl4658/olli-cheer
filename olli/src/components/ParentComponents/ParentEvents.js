// This component will display all events and allow for event signup.

// path to event images folder: 
import { useState } from "react";
const eventImagePath = "../../assets/EventPhotos/"; 

export default function EventsList({ events }) {
    const updatedImageContext = require.context('../../assets/EventPhotos', false, /\.(png|jpg|jpeg|gif|webp|svg)$/);
    const [file, setFile] = useState(updatedImageContext.keys().map(updatedImageContext))



    return (
        <div>
            {events && (
                <div>
                    <h1>Upcoming Events: </h1>
                    <div>
                        {events.map((event) => (
                            <div key={event.id}>
                                <h2>{event.title}</h2>
                                <p>{event.descrip}</p>
                                <p>{event.short_descrip}</p>
                                <p>Start: {event.start.toLocaleString()}</p>
                                <p>End: {event.end.toLocaleString()}</p>
                                <p>Image Path: {event.path} </p>
                                {/** Iterate through images and find the one corresponding to event.path */}
                                {event.path && file.map((imagePath) => {
                                    const imageName = imagePath.split('/')[3].split('.')[0];
                                    const imageSuffix = imagePath.split('.')[2]

                                    if (event.path.includes(imageName + '.' + imageSuffix)) {

                                        return (
                                            <img
                                                key={imagePath}
                                                src={imagePath}

                                                style={{ maxWidth: '100%' }}
                                            />
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}