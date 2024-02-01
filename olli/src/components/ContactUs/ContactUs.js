import React from "react";
import ContactInfo from "./ContactInfo";
import WidgetLinks from "./WidgetLinks";
import "../../CSS/ContactUs/Contact.css"

export default function ContactUs(){

	return(

		<div id = "ContactUsDiv">
			<div data-aos="zoom-in">
				<h1 id = 'ContactTitle'>Get To Know The Team </h1>
			</div>
			<WidgetLinks></WidgetLinks>
			<ContactInfo></ContactInfo>
		</div>


	); 
}

