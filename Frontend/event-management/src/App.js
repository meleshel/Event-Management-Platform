import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Dashboard from './pages/Dashboard.js';
import CreateEvent from './pages/CreateEvent.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container } from 'react-bootstrap';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Container fluid className="bg-light min-vh-100 p-5"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;