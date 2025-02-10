import React, { useState } from 'react';
import { createEvent } from '../../api.js';

const EventForm = ({ onCreate }) => {
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createEvent(eventData);
      onCreate(response.data.event); // Notify parent component of successful creation
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Name"
        value={eventData.name}
        onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={eventData.description}
        onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
        required
      />
      <input
        type="datetime-local"
        value={eventData.date}
        onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Location"
        value={eventData.location}
        onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
        required
      />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;