import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand to="/home"><h2>Music & Melody</h2></Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink className="text-decoration-none px-2 navLink" to="/home">Home</NavLink>
                    <NavLink className="text-decoration-none px-2 navLink" to="/about">About</NavLink>
                    <NavLink className="text-decoration-none px-2 navLink" to="/services">Services</NavLink>
                    <NavLink className="text-decoration-none px-2 navLink" to="/contact">Contact us</NavLink>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;