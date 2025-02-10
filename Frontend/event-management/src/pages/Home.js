import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}> 
          <Card className="text-white bg-primary p-4 p-md-5 text-center shadow-lg rounded"> 
            <Card.Body>
              <Card.Title className="display-4 fw-bold fs-2 fs-md-1"> 
                Welcome to Event Manager
              </Card.Title>
              <Card.Text className="lead mt-3 fs-5 fs-md-4">
                Create, manage, and view events in real-time.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;