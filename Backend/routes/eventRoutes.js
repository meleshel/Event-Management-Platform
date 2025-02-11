import express from 'express';
import { createEvent, getEvents, deleteEvent } from '../controllers/eventController.js';
import { authMiddleware } from '../utils/authMiddleware.js'; 

const router = express.Router();

// Define routes
router.post('/create-event', authMiddleware, createEvent); 
router.get('/', authMiddleware, getEvents);
router.delete('/:id', authMiddleware, deleteEvent);

export default router;