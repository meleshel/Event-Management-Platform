import express from 'express';
import { createEvent, getEvents, deleteEvent } from '../controllers/eventController.js';
import { authMiddleware } from '../utils/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createEvent);
router.get('/', getEvents);
router.delete('/:id', authMiddleware, deleteEvent);

export default router;