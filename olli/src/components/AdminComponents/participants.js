import React, { useState } from 'react';

const Participants = ({ participants, title }) => {
    const [showParticipants, setShowParticipants] = useState(false);


    console.log('The event' + title);

    return (
        <div>
            <button onClick={() => setShowParticipants(!showParticipants)}>
                View Signed up participants
            </button>

            {showParticipants && (
                <div className="dropdown-list">

                    <p>Currently Signed up users:</p>

                    <ol>
                        {participants && participants.map((part, index) => (
                            // Filter participants based on the event title
                            title === part.title &&
                            ( // Removed curly braces here
                                <div key={index}>
                                    <li backgroundColor='black'>{part.username}</li>
                                </div>
                            )



                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default Participants;
