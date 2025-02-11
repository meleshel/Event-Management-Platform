import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import eventRoutes from './routes/eventRoutes.js'; 
import authRoutes from './routes/authRoutes.js'; 
import errorHandler from './utils/errorHandler.js';

dotenv.config();

const app = express();
const port = 5003;

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true, 
};
app.use(cors(corsOptions));

// Routes
app.use('/api/events', eventRoutes);
app.use('/api/auth', authRoutes); 

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.use(errorHandler);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;