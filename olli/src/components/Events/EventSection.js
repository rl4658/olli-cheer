import React, {useEffect}from "react";
import EventSlider from "./EventSlider";
import { Cards } from "./Cards";
import "../../CSS/Events/EventSection.css"
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function EventSection(){
  useEffect(() => {
    AOS.init();
  }, [])
    return(
        <div className="eventSection">
        <h1 className="etitle" data-aos-once="true" data-aos = "fade-up">Upcoming Events</h1>

        <EventSlider
        Cards={Cards}
        />

        </div>
    )
}