import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../../api.js';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetchEvents();
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    loadEvents();
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleString()}</p>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
