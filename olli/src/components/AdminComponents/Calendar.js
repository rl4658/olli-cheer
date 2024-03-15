import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'; 
import moment from 'moment';
import AdminNavBar from '../NavBars/AdminNavBar';
import "../../CSS/Calendar/calendar.css"

const localizer = momentLocalizer(moment);

const MyCalendar = (user) => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);


  useEffect(() => {
    fetchEvents(); // load all of the events into the calendar. 
  }, []) // empty array to run only once (when the component mounts)

 const fetchEvents = async () => {
  try {
    const response = await fetch(`/events/getAllEvents`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${user.accessToken}`
        }
    });
    if (!response.ok) {
        console.error("Failed to get all events");
        return;
    }
    const data = await response.json();
    if (data.error) {
        console.error("Error getting all events");
        return;
    }
    console.log('This is the data. ' + JSON.stringify(data))
    setEvents(JSON.stringify(data)); // [{}] // data is an array of objects I believe. 

    if (Array.isArray(data)) { // Check if data is an array
      setEvents(data); // Set events to the array data
    } else {
      console.error("Data is not an array:", data);
    }


  } catch (error) {
      console.error("Error getting all events:", error);
      return;
  }
 }


  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Enter event title:');
    const description = window.prompt('Enter event description: ');
    const shortDescription = window.prompt('Enter the short description: ')

    if (title && description) {
      const newEvent = {
        id: events.length + 1,
        start,
        end,
        title,
        description,
        shortDescription,
        file: null // Initialize file as null for the new event
      };
      setEvents([...events, newEvent]);
    }
  };


  const deleteEvent = async (title) => {
    try {
        const response = await fetch(`/events/deleteEvent`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user.accessToken}`
            },
            body: {
              title: title,
            }
        });
        if (!response.ok) {
            console.error("Failed to delete user");
            return;
        }
        const data = await response.json();
        if (data.error) {
            console.error("Error deleting user");
            return;
        }
		fetchEvents(); 
    } catch (error) {
        console.error("Error deleting user:", error);
        return;
    }
};


// const { title, descrip, shortDescrip, image } = req.body;
const addEvent = async (eventToAdd) => {
  try {
      const response = await fetch(`/events/addEvent`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${user.accessToken}`
          },
          body: {
            title: eventToAdd.title,
            descrip: eventToAdd.description,
            shortDescrip: eventToAdd.shortDescription,
            image: eventToAdd.file ? eventToAdd.file : null, // Send null if there is no image data.
            start: eventToAdd.start, // the starting date of the event.
            end: eventToAdd.end, // the ending date of the event. 
          }
      });
      if (!response.ok) {
          console.error("Failed to add event");
          return;
      }
      const data = await response.json();
      if (data.error) {
          console.error("Error adding event");
          return;
      }

  fetchEvents(); 
  } catch (error) {
      console.error("Error adding event:", error);
      return;
  }
};


  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };


  const handleAddEvent = (eventToAdd) => {
    addEvent(eventToAdd); 
  }


  const handleDeleteEvent = (eventToDelete) => {
    if (window.confirm(`Are you sure you want to delete the event "${eventToDelete.title}"?`)) {
      deleteEvent(eventToDelete.title); // using the title to delete the event. 
      const updatedEvents = events.filter((ev) => ev.id !== eventToDelete.id);
      setEvents(updatedEvents);
      setSelectedEvent(null);
    }
  };


  // adds the file to an event and stores it as a blob. 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      const blob = new Blob([reader.result], { type: file.type });
      const updatedEvents = events.map((ev) => {
        if (ev.id === selectedEvent.id) {
          return { ...ev, file: blob }; // Update the file property of the selected event with the Blob
        }
        return ev;
      });
      setEvents(updatedEvents);
    };
    reader.readAsArrayBuffer(file);
  };
  

  return (
    <div>
      <AdminNavBar /> 
      <div>
        <h1 className="calendarTitle">Welcome to the OLLI Calendar!</h1>
      </div>
      <div className="containingDiv">
        <Calendar
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ margin: '50px' }}
        />
        {selectedEvent && (
          <div className="event-details">
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.description}</p>
            <p>Start: {selectedEvent.start.toLocaleString()}</p>
            <p>End: {selectedEvent.end.toLocaleString()}</p>
            <input type="file" onChange={handleFileChange} />
            {selectedEvent.file && (
              <img src={URL.createObjectURL(selectedEvent.file)} alt="Selected" style={{ maxWidth: '100%' }} />
            )}
            <button onClick={() => handleDeleteEvent(selectedEvent)}>Delete Event</button>
            <button onClick={() => handleAddEvent(selectedEvent)}>Save and publish this event</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCalendar;
