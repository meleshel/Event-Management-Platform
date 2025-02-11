import app from './app.js';
import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer(app); 

const io = new Server(server);

io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 5003; 

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
