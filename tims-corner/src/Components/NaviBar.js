import React, {useEffect} from 'react';
import img from '../Images/logo.png';
import '../Styles/Nav.css';
import { Nav, Navbar, Container } from 'react-bootstrap';

function NaviBar () {
  return(
    <Navbar bg="light" expand="lg" className="sticky-top">
    <Container>
      <Navbar.Brand href="#homepage">
        <img
          alt=""
          src={img}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Tim's Corner
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav navbarScroll" className="justify-content-end">
        <Nav>
          <Nav.Link href="#aboutMe">About Me</Nav.Link>
          <Nav.Link href="#resume">Resume</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#contacts">Contacts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}



export default NaviBar;
