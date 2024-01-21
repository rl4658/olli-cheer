import React from 'react';
import '../../CSS/Cheer/Cheer.css';

const CheerWorks = () => {
    return (
        <div className="cheer-container">
            <div className="image-container">
                <img src={require("./cheerworks.png")} />
            </div>
            <section className="cheer-statement">
                <h2>C.H.E.E.R Works</h2>
                <p>
                    In June, 2023, we opened an ice cream/variety store called Cheer Canteen and Roxy’s Putter Golf course at Rock Glen Resort, in Arkona, open street side to the public as well as the camp, so please come by and support us if you are in the area. CHEER Works employs members of the CHEER Group who have been developing their job skills. This is a safe and assisted working environment providing paid employment for our community members with intellectual disabilities. Caregivers and community supporter volunteer to help with this initiative. There are many different jobs to be done. Everyone enjoys working together and we have a great team!                </p>
            </section>
        </div>
    );
};

export default CheerWorks;