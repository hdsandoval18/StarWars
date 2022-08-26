import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import logo from '../img/logo.png';

function BasicExample() {
  return (
    <div className='navbar'>
    <Navbar bg="gold" expand="lg">
      <Container>
       <img src={logo} width="80" height="80" alt="" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link className='nav-link'to='/'>inicio</Link></Nav.Link>
            <Nav.Link ><Link className='nav-link'to='/personajesAPI'>Personajes</Link></Nav.Link>
            <Nav.Link ><Link className='nav-link'to='/planetasAPI'>Planetas</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default BasicExample;

