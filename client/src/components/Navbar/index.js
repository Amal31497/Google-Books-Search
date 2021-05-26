import React from 'react';
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';

function Navigation() {

    return (
        <Navbar expand="lg" bg="dark" variant="dark" id="navbar">
            <NavbarBrand href="/">Google Books</NavbarBrand>
            <Nav className="mr-auto">
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="/saved">Saved</Nav.Link>
            </Nav>
        </Navbar>
    )
}

module.exports = Navigation;