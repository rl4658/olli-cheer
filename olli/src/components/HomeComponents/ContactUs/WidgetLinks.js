import React from "react";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import './Iphone.png';
import './Mail.png';
import "../../../CSS/ContactUs/Contact.css"
import 'aos/dist/aos.css';


export default function WidgetLinks() {
  const facebookLink = 'https://www.facebook.com/familyconnectionscheer';
  const emailLink = 'cburnscheer@gmail.com';
  const phoneNumber = 'Iveys number';


  return (
    <div id='widgets' data-aos="zoom-in" data-aos-once="true" data-aos-duration="5000">



      <div>
        <FacebookShareButton url={facebookLink}>
          <FacebookIcon size={64} round />
        </FacebookShareButton>
      </div>


      {/* Email link with image */}
      <a href={`mailto:${emailLink}`}>
        <img src={require("./Mail.png")} width='64px' height='64px' alt="Email" />
      </a>

      {/* Phone number link with image */}
      <a href={`tel:${phoneNumber}`}>
        <img src={require("./Iphone.png")} width='64px' height='64px' alt="Phone" />
      </a>
    </div>
  );
}
