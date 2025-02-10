import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom">
      <Container className="justify-content-center py-3">
        <Navbar.Text className="text-center"> 
          &copy; 2025 Event Manager. All rights reserved.
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;