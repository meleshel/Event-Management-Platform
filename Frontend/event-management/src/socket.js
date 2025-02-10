import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
    withCredentials: true, // Include credentials (if needed)
    transports: ['websocket', 'polling'], // Ensure both transports are allowed
});

socket.on('connect', () => {
    console.log('Connected to Socket.IO server');
});

socket.on('connect_error', (error) => {
    console.error('Socket.IO connection error:', error);
});

export default socket;