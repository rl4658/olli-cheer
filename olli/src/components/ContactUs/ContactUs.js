import React from "react";
import ContactInfo from "./ContactInfo";
import WidgetLinks from "./WidgetLinks";
import "../../CSS/ContactUs/Contact.css"

export default function ContactUs(){

	return(

		<div id = "ContactUsDiv">
			<div data-aos="fade-right" data-aos-once="false" data-aos-duration="5000">
				<h1 id = 'ContactTitle'>Get To Know The Team  </h1>
			</div> 
			<WidgetLinks></WidgetLinks>
			<ContactInfo></ContactInfo>
		</div>


	); 
}

