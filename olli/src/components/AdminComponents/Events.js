// This component will display all events and allow for event signup.

export default function EventsList({ events }) { // Renamed the function and the parameter

    console.log(events)

    return (
        <div>
            {events && (
                <div>
                    <h1>Upcoming Events: </h1>
                    <div>
                        {events.map((event) => (
                            <div key={event.id}>
                                {/* Add a unique key for each mapped element */}
                                <h2>{event.title}</h2>
                                <p>{event.descrip}</p>
                                <p>{event.short_descrip}</p>
                                <p>Start: {event.start.toLocaleString()}</p>
                                <p>End: {event.end.toLocaleString()}</p>
                                {/* {event.filePath && (
                                    <img
                                        src={URL.createObjectURL(event.filePath)}
                                        alt="Selected"
                                        style={{ maxWidth: '100%' }}
                                    />
                                )} */}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
