import React from "react";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import './Iphone.png'; 
import './Mail.png';
import "../../CSS/ContactUs/Contact.css"
import AOS from 'aos'; 
import 'aos/dist/aos.css';


export default function WidgetLinks() {
  const facebookLink = 'herFacebookLink';
  const emailLink = 'OLLIemail';
  const phoneNumber = 'Iveys number';

   
  return (
    <div data-aos="zoom-in" id = 'widgets'>



      <div>
          <FacebookShareButton url={facebookLink}>
            <FacebookIcon size={64} round />
          </FacebookShareButton>
      </div>


      {/* Email link with image */}
      <a href={`mailto:${emailLink}`}>
        <img src={require("./Mail.png")} width = '64px' height = '64px' alt="Email" />
      </a>

      {/* Phone number link with image */}
      <a href={`tel:${phoneNumber}`}>
        <img src={require("./Iphone.png")} width = '64px' height = '64px' alt="Phone" />
      </a>
    </div>
  );
}
