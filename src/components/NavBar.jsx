import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './NavBar.css'

export default class NavBar extends Component {
    render(){
        return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <Link className="navbar-brand" to="/">Akashic Systems</Link>
               <ul className="navbar-nav">
                   <li className="nav-item">
                       <Link className="nav-link" to="/home">Home</Link>
                   </li>
                   <li className="nav-item">
                       <Link className="nav-link" to="/about">About</Link>
                   </li>
                   <li className="nav-item">
                        <Link className="nav-link" to="/features">Features</Link>
                    </li>
               </ul>
           </nav>
        </div>
        )
    }
}
 