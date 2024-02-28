import React from "react";
import ContactInfo from "./ContactInfo";
import WidgetLinks from "./WidgetLinks";
import "../../../CSS/ContactUs/Contact.css";
import map from "./map.png";
import location from "./location.png";
import gmail from "./gmail.png";
import phone from "./phone.png";

export default function ContactUs() {
	return (
		<div id="ContactUsDiv">
			<div data-aos="fade-up" data-aos-once="true">
				<h1 id="ContactTitle">Reach Our Team</h1>
				<p className="header1">We love questions and feedback – and we’re always happy to help!</p>
				<p className="header2">Here are some ways to contact us.</p>
				<div id="SalesSupportContainer">
					<div id="SalesDiv">
						<h2>Talk to our Staffs</h2>
						<p>Chat with our staff team to discover how our support can work best for you.</p>
						<p>Phone: +1 632 960 985</p>
					</div>
				</div>
				<div id="CustomerSupportContainer">
					<div id="SupportDiv">
						<h2>Contact Customer Support</h2>
						<p>We are waiting to help you and your families – so don’t hesitate to reach out!</p>
						<button>CONTACT SUPPORT</button>
					</div>
				</div>
				<ContactInfo></ContactInfo>
				<hr data-aos="fade-up" data-aos-once="true" className="contact-divider" />
				<div data-aos="fade-up" data-aos-once="true" id="HeadquartersAndMapContainer">
					<div id="HeadquartersDiv">
						<h2 className="headquarterTitle">Headquarters</h2>
						<div className="contact-info">
							<div className="info-item">
								<img data-aos="fade-up" data-aos-once="true" src={location} alt="location" className="location" />
								<p data-aos="fade-up" data-aos-once="true" className="address">Arkona, ON N0M 1B0</p>
							</div>
							<div className="info-item">
								<img data-aos="fade-up" data-aos-once="true" src={gmail} alt="mail" className="mail" />
								<p data-aos="fade-up" data-aos-once="true" className="gmail">cburnscheer@gmail.com</p>
							</div>
							<div className="info-item">
								<img data-aos="fade-up" data-aos-once="true" src={phone} alt="phone" className="phones" />
								<p data-aos="fade-up" data-aos-once="true" className="phone">+1 617-555-0198</p>
							</div>
						</div>
						<div className="lol">
							<WidgetLinks></WidgetLinks>
						</div>
					</div>

					<img data-aos="fade-up" data-aos-once="true" src={map} alt="Vision" className="map-image" />
				</div>
			</div>
		</div>
	);
}
