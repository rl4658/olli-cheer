import React from "react";
import "../../../CSS/ContactUs/WorkerInformation.css"
import { useState } from "react";


export default function ContactInfo() {
  // This is going to be temporary info for fake contacts since we don't have a backend yet.
  const workers = [
    {
      name: 'Ivey',
      cell: 9057778888,
      email: 'iveyEmail@fake.com', 
      description: "Ivey is the compassionate and dedicated owner of a special needs care business.",
      photo: "https://source.unsplash.com/random/200x200/?business&woman",
      position: 'owner'
    },
    {
      name: 'Seth',
      cell: 9057777777,
      email: 'aliceEmail@fake.com', 
      description: "Alice is an adventurous explorer with a passion for discovering new places.",
      photo: "https://source.unsplash.com/random/200x200/?engineer",
      position: 'Software Engineering Intern'
    },
    {
      name: 'Raymond',
      cell: 9057776666,
      email: 'bobEmail@fake.com', 
      description: "Bob is a skilled craftsman who loves working with his hands to create beautiful things.",
      photo: "https://source.unsplash.com/random/200x200/?software&student",
      position: 'Senior Software Engineer'
    },
    {
      name: 'Sabi',
      cell: 9057775555,
      email: 'charlieEmail@fake.com', 
      description: "Charlie is a dedicated educator who is passionate about inspiring young minds.",
      photo: "https://source.unsplash.com/random/200x200/?software&engineer",
      position: 'Full Stack Web Developer'
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
    <div id = 'containAllWorkers'>

      {workers.map((worker, index) => (

        <div key = {index} data-aos="zoom-in" data-aos-duration = "1500">
          <div
            className={`team-member ${clickedIndices.includes(index) ? 'clicked' : ''}`}
            onClick={() => handleToggleClick(index)}
          >
              <div className={`front`}>
                <img src={worker.photo} alt={worker.name} className="photo" />
                <p className="position"> {worker.position}</p>
                <p className="name">{worker.name}</p>
              </div>



              <div className={`back`}>

                <p className="info">{worker.description}</p>

                <div className = "contact-info">
                  <p className = "cellNumber">{worker.cell}</p>
                  <p className = "email">{worker.email}</p>
                </div>
                
              </div>
          </div>
        </div>
      ))}
    </div>
  );

  
}
