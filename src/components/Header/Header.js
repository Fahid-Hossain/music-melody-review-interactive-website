import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (

     
        <Navbar bg="dark" varian="dark" expand="lg">
            <Container>
            <Navbar.Brand to="/home"><h2><i className="fas fa-music px-2"></i> <i>Music & Melody</i></h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <NavLink className="text-decoration-none px-2 navLink" to="/home">Home</NavLink>
                     <NavLink className="text-decoration-none px-2 navLink" to="/about">About</NavLink>
                     <NavLink className="text-decoration-none px-2 navLink" to="/courses">Courses</NavLink>
                     <NavLink className="text-decoration-none px-2 navLink" to="/contact">Contact us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;