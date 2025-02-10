import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../api.js';
import { Card, ListGroup, Container, Spinner, Alert, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const response = await fetchEvents();
        setEvents(response.data);
      } catch (error) {
        setError('Failed to fetch events. Please try again later.');
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3">Loading events...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Event Dashboard</h1>
      {events.length === 0 ? (
        <Alert variant="info" className="text-center">
          No events found.
        </Alert>
      ) : (
        <Row>
          {events.map((event) => (
            <Col key={event._id} xs={12} sm={6} md={4} className="mb-4">
              <Card className="shadow-sm rounded h-100">
                <Card.Body>
                  <Card.Title className="text-primary">{event.name}</Card.Title>
                  <Card.Text>{event.description}</Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Date:</strong> {new Date(event.date).toLocaleString()}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Location:</strong> {event.location}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Dashboard;