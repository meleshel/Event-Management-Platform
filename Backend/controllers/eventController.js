import Event from '../models/Event.js';

export const createEvent = async (req, res) => {
  const { name, description, date, location } = req.body;
  const event = new Event({ name, description, date, location, createdBy: req.user.id });
  await event.save();
  res.status(201).json(event);
};

export const getEvents = async (req, res) => {
  const events = await Event.find().populate('createdBy', 'username');
  res.json(events);
};

export const deleteEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event.createdBy.toString() !== req.user.id) {
    return res.status(403).json({ message: 'Not authorized' });
  }
  await event.remove();
  res.json({ message: 'Event deleted' });
};