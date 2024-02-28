import React from "react";
import "../../../CSS/ContactUs/WorkerInformation.css"
import { useState } from "react";


export default function ContactInfo() {
  // This is going to be temporary info for fake contacts since we don't have a backend yet.
  const workers = [
    {
      name: 'Ivey Hartman',
      cell: 9057778888,
      email: 'Email: iveyEmail@fake.com',
      description: "Ivey is the compassionate and dedicated owner of a special needs care business.",
      photo: require("./ivey.png"),
      position: 'CEO'
    },
    {
      name: 'Seth',
      cell: 9057777777,
      email: 'Email: aliceEmail@fake.com',
      description: "Alice is an adventurous explorer with a passion for discovering new places.",
      photo: "https://source.unsplash.com/random/200x200/?engineer",
      position: 'Staff'
    },
    {
      name: 'Raymond',
      cell: 9057776666,
      email: 'Email: bobEmail@fake.com',
      description: "Bob is a skilled craftsman who loves working with his hands to create beautiful things.",
      photo: "https://source.unsplash.com/random/200x200/?software&student",
      position: 'Staff'
    },
    {
      name: 'Sabi',
      cell: 9057775555,
      email: 'Email: charlieEmail@fake.com',
      description: "Charlie is a dedicated educator who is passionate about inspiring young minds.",
      photo: "https://source.unsplash.com/random/200x200/?software&engineer",
      position: 'Staff'
    },
  ];


  const [clickedIndices, setClickedIndices] = useState([]);

  const handleToggleClick = (index) => {
    if (clickedIndices.includes(index)) {
      setClickedIndices(clickedIndices.filter((idx) => idx !== index));
    } else {
      setClickedIndices([...clickedIndices, index]);
    }
  };


  return (
    <div id='containAllWorkers'>

      {workers.map((worker, index) => (

        <div key={index} data-aos="zoom-in" data-aos-once="true" data-aos-duration="1500">
          <div
            className={`team-member ${clickedIndices.includes(index) ? 'clicked' : ''}`}
            onClick={() => handleToggleClick(index)}>
            <div className={`front`}>
              <img src={worker.photo} alt={worker.name} className="photo" />
              <p className="position"> {worker.position}</p>
              <p className="name">{worker.name}</p>
            </div>
            <div className={`back`}>
              <p className="workerinfo">{worker.description}</p>
              <div className="contact-info">
                <p className="cellNumber">{worker.cell}</p>
                <p className="email">{worker.email}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
