import Event from '../models/Event.js';

export const createEvent = async (req, res) => {
  console.log('Create Event Request:', req.body); // Debug log
  try {
    const { name, description, date, location } = req.body;

    const newEvent = new Event({
      name,
      description,
      date,
      location,
      owner: req.user._id,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({ message: 'Error creating event' });
  }
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