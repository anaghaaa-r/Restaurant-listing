import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">RESTAURANTS-LISTINGS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="#">Contact Details</Nav.Link>
            <Nav.Link href="#pricing">Features</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header