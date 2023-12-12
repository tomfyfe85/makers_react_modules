import React, { useState, useEffect } from "react";

interface Events {
  event_id: string;
  band_name: string;
  image_url: string;
  description: string;
  time: string;
  location: string;
  favourited: boolean;
}

const Events: React.FC = () => {
  const [events, setEvents] = useState<null>(null);

  const newEvent = () => {
    setTimeout(() => {
      fetch(`https://makers-gig-backend.onrender.com/events`)
        .then((res) => res.json())
        .then((data) => setEvents(data))
        .catch((error) => console.error("Error fetching data:", error));

    }, 2000)}
      

  useEffect(() => {
    newEvent();
  }, []);

  return events ? (
    <>
      <h2>Events</h2>
      <div className="events-list">
        {events.map((eventsData) => (
          <ul key={parseInt(eventsData.event_id, 10)}>
            <li>
              {eventsData.band_name}: <br />
              {eventsData.description} <br />
              {eventsData.time} <br />
              {eventsData.location}
            </li>
          </ul>
        ))}
      </div>
    </>
  ) : (<p>loading </p>)
};
export default Events;

// get events data
// data is an array of objects
