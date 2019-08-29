import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


export class Navbarport extends Component {
    render() {
        return (
            <div>
                <Navbar expand="md" variant='dark' sticky='top'>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className='link' href="#home">Home</Nav.Link>
                            <Nav.Link className='link' href="#projects">Projects</Nav.Link>
                            <Nav.Link className='link' href="#about">About</Nav.Link>
                            <Nav.Link className='link' href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}