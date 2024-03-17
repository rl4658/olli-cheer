import React from "react";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import './Iphone.png';
import './Mail.png';
import "../../../CSS/ContactUs/Contact.css"
import 'aos/dist/aos.css';


export default function WidgetLinks() {
  const facebookLink = 'https://www.facebook.com/familyconnectionscheer';

  return (
    <div id='widgets' data-aos="fade-up" data-aos-once="true" data-aos-duration="5000">
      <FacebookShareButton className="facebook-icon" url={facebookLink}>
        <FacebookIcon round size={64} /> {/* size prop adjusts the SVG icon size */}
      </FacebookShareButton>


      {/* Email link with image
      <a href={`mailto:${emailLink}`}>
        <img src={require("./Mail.png")} width='64px' height='64px' alt="Email" />
      </a>

      {/* Phone number link with image
      <a href={`tel:${phoneNumber}`}>
        <img src={require("./Iphone.png")} width='64px' height='64px' alt="Phone" />
      </a> */}
    </div>
  );
}
