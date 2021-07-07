import React from 'react';
import { Navbar, Nav, Container  } from 'react-bootstrap';
import './navbar.css';

const Navigation = ({onClick}) => {
    return (
        <Navbar bg="light" expand="lg" className="navbar_cus">
            <Container>
                <Navbar.Brand href="#home">Shop List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link" onClick={onClick}>Add Shop</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
