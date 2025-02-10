import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const createEvent = async (eventData) => {
    return axios.post(`${API_URL}/events`, eventData, { withCredentials: true });
  };
  
export const fetchEvents = async () => {
    return axios.get(`${API_URL}/events`);
  };

export const register = async (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const login = async (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData, { withCredentials: true });
};