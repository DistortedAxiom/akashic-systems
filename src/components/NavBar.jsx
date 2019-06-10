import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './NavBar.css'

export default class NavBar extends Component {
    render(){
        return (
            <Navbar expand="lg" bg="dark" variant="dark">
                 <Navbar.Brand href="#home">Akashic Systems</Navbar.Brand>
                 <Nav className="mr-auto">
                 </Nav>
            </Navbar>
        )
    }
}
 