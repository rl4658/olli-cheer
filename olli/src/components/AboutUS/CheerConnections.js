import React from 'react';
import '../../CSS/Cheer/Cheer.css';

const CheerConnections = () => {
    return (
        <div className="cheer-container">
            <div className="image-container">
                <img src={require("./cheerconnections.png")} />
            </div>
            <section className="cheer-statement">
                <h2>C.H.E.E.R Connections</h2>
                <p>
                    Cheer Connections, formed in February 2021, is a support group for caregivers, including parents of CHEER group members and others in similar situations. Meeting monthly since November 2021, we provide a platform for sharing knowledge and mutual support. Funded by the Ontario Caregivers Association and other supporters, we offer relaxing gatherings with lunches and guest speakers. Topics of discussion include ODSP, housing, employment, and social opportunities, with a focus on finding solutions for the future of our loved ones. Participation in Cheer Connections is a requirement for CHEER Group families, fostering a community of inclusion and reducing caregiver isolation. The group, supported by donations and fundraisers, also offers social events and respite care services.
                </p>
            </section>
        </div>
    );
};

export default CheerConnections;