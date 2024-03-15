import React from "react";
import ImageSlider from "../HomeComponents/ImageSlider/ImageSlider";
import Cheers from "../HomeComponents/AboutUS/Cheers";
import EventSection from "../HomeComponents/Events/EventSection";
import NewsLetterSection from "../HomeComponents/NewsLetters/NewsletterSection";
import GuestUserBar from "../NavBars/GuestUserBar";
import AboutUs from "../HomeComponents/AboutUS/AboutUsSection";
import ContactUs from "../HomeComponents/ContactUs/ContactUs";

export default function HomePage({ user }) {
  return (
    <div>
      <GuestUserBar user={user} />

    </div>
  )
}