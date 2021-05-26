import React from 'react';
import { Navbar, Nav, NavbarBrand, Container } from 'react-bootstrap';
import './style.css';

function Navigation() {

    return (
        <Navbar expand="lg" bg="dark" variant="dark" id="navbar">
            <Container id="container">
                <NavbarBrand href="/">Google Books</NavbarBrand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Search</Nav.Link>
                    <Nav.Link href="/saved">Saved</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation;