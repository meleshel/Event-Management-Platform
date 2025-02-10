import React, { useState } from 'react';
import { login } from '../../api.js';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      onLogin(response.data.user);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}> 
          <Card className="shadow p-3 p-md-4"> 
            <Card.Title className="text-center mb-4 fs-3 fs-md-2"> 
              Login
            </Card.Title>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-100" 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-100" 
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;