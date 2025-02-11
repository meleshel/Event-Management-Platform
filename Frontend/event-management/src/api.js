import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5003/api';

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events`, {
      withCredentials: true, 
    });
    return response.data; 
  } catch (error) {
    throw error; 
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${API_URL}/events/create-event`, eventData, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,  
    });
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

export const register = async (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(
      'http://localhost:5003/api/login',
      { email, password },  
      { withCredentials: true }  
    );
    console.log(response.data);  
    return response.data; 
  } catch (error) {
    console.error('Error logging in:', error.response?.data || error.message);
    throw error; 
  }
};

export const deleteEvent = async (eventId) => {
  return axios.delete(`${API_URL}/events/${eventId}`, { withCredentials: true });
};

