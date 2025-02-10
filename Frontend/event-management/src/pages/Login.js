import React, { useState } from 'react';
import { Form, Button, Container, Alert, Row, Col, Card } from 'react-bootstrap';
import { login } from '../api.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/dashboard');
    } catch (error) {
      setError('Invalid email or password.');
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
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-100" 
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
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

export default Login;