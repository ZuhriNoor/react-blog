import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{padding: '10px 100px'}}>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link><Link to='/' className='link'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/form' className='link'>Add Blog</Link></Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
