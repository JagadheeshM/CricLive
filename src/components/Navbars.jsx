import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
function Navbars() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">JagLive</Navbar.Brand>
          <Nav className="me-auto">
          <LinkContainer to="/"><Nav.Link to="/">Home</Nav.Link></LinkContainer>
           <LinkContainer to="/Recent"><Nav.Link to="/Recent">Recent</Nav.Link></LinkContainer>
           <LinkContainer to="/Live"><Nav.Link to="/Live">Live</Nav.Link></LinkContainer>
           <LinkContainer to="/Upcoming"><Nav.Link to="/Upcoming">Upcoming</Nav.Link></LinkContainer>
           <LinkContainer to="/News"><Nav.Link to="/News">News</Nav.Link></LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;