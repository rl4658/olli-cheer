import React from 'react';
import '../../CSS/Cheer/Cheer.css';
import CheerGroupImage from './cheergroup.png';
import CheerConnectionsImage from './cheerconnections.png';
import CheerWorksImage from './cheerworks.png';

const Cheers = () => {
    return (
        <div className="cheers-container">
            <div className="cheer-container">
                <div className="image-container">
                    <img data-aos="fade-down" data-aos-duration="5000" src={CheerGroupImage} alt="Cheer Group" />
                </div>
                <div className="text-container">
                    <h2 data-aos="fade-up" data-aos-duration="5000">C.H.E.E.R Group</h2>
                    <p data-aos="fade-up" data-aos-duration="5000">
                        The CHEER Group offers affordable support for adults with intellectual disabilities, focusing on social activities and community integration. With a 4:1 support worker ratio and family engagement, they embody a mission of spreading joy and comfort.
                    </p>
                </div>
            </div>

            <div className="cheer-container">
                <div className="image-container">
                    <img data-aos="fade-down" data-aos-duration="5000" src={CheerConnectionsImage} alt="Cheer Connections" />
                </div>
                <div className="text-container">
                    <h2 data-aos="fade-up" data-aos-duration="5000">C.H.E.E.R Connections</h2>
                    <p data-aos="fade-up" data-aos-duration="5000">
                        The summary captures the key points of Cheer Connections: it mentions the support for caregivers, the monthly meetings, funding sources, discussion topics, and the group's efforts to foster inclusion and reduce caregiver isolation. However, it may not include every detail from the original text due to the brevity requirement.
                    </p>
                </div>
            </div>

            <div className="cheer-container">
                <div className="image-container">
                    <img data-aos="fade-down" data-aos-duration="5000" src={CheerWorksImage} alt="Cheer Works" />
                </div>
                <div className="text-container">
                    <h2 data-aos="fade-up" data-aos-duration="5000">C.H.E.E.R Works</h2>
                    <p data-aos="fade-up" data-aos-duration="5000">
                        In June 2023, Cheer Canteen and Roxy’s Putter Golf course opened at Rock Glen Resort, offering employment opportunities for members of the CHEER Group to develop job skills in a safe environment. Caregivers and community supporters volunteer to assist in various tasks, fostering teamwork and a supportive community atmosphere.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cheers;
