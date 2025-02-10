import React, { useState } from 'react';
import { Form, Button, Container, Alert, Row, Col, Card } from 'react-bootstrap';
import { createEvent } from '../api.js';
import { useNavigate } from 'react-router-dom';

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!eventData.name || !eventData.description || !eventData.date || !eventData.location) {
      setError('All fields are required.');
      return;
    }

    try {
      await createEvent(eventData);
      setSuccess(true);
      setError('');
      navigate('/dashboard');
    } catch (error) {
      setError('Failed to create event. Please try again.');
      console.error('Error creating event:', error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}> 
          <Card className="shadow p-3 p-md-4"> 
            <Card.Title className="text-center mb-4 fs-3 fs-md-2"> 
              Create Event
            </Card.Title>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Event created successfully!</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEventName">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter event name"
                  value={eventData.name}
                  onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
                  required
                  className="w-100" 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  value={eventData.description}
                  onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
                  required
                  className="w-100" 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Date and Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={eventData.date}
                  onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                  required
                  className="w-100" 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  value={eventData.location}
                  onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
                  required
                  className="w-100" 
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Create Event
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateEvent;