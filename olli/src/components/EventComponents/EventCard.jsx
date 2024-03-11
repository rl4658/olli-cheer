import React from "react";


export default function EventCard({ title, URL, description }) {

    return (

        <div className="cardContainer">

            <img src={(URL)} alt="" className="image" />

            <div className="content-wrapper">
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>

                <div className="button-wrapper"><button className="button">Learn More</button></div>

            </div>


        </div>
    )
}
