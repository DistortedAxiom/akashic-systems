import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './NavBar.css'

export default class NavBar extends Component {
    render(){
        return (
        <div>
            <Navbar expand="lg" bg="dark" variant="dark">
                 <Navbar.Brand href="#home">Akashic Systems</Navbar.Brand>
                 <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                 </Nav>
            </Navbar>
        </div>
        )
    }
}
 