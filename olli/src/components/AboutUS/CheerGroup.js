import React from 'react';
import '../../CSS/Cheer/Cheer.css';

const CheerGroup = () => {
    return (
        <div className="cheer-container">
            <div className="image-container">
                <img src={require("./cheergroup.png")} />
            </div>
            <section className="cheer-statement">
                <h2>C.H.E.E.R Group</h2>
                <p>
                    CHEER Group offers affordable, community-based support for adults with higher-functioning intellectual disabilities. We utilize a cost-effective 4:1 support worker ratio, with a mix of full-time, part-time, and volunteer staff, reducing costs to $13.50 per hour. This program is funded through Passport funding. Our attendees enjoy socializing with friends and participating in pre-scheduled monthly activities, focusing on life, social, and leisure skills. Our facilities include a clubhouse at Rock Glen Family Resort with amenities like an indoor pool and fitness centre. Attendees should be self-sufficient in personal care, and family engagement is vital. The group emphasizes community integration, with special outings and projects. CHEER stands for joy, praise, comfort, and support, reflecting our group's mission.
                </p>
            </section>
        </div>
    );
};

export default CheerGroup;