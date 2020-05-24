import React, {Fragment} from 'react'
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';
import '../css/navbar.css'

const NavBar = () => {
    const showPlanner = () => {
        console.log('showPlanner')
    }

    return (
    <Navbar bg="dark" expand="lg" variant="dark">
    <Navbar.Brand href="#home">
        <img
        src="https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/logo.png?token=ADKTL377SEGUDAIFK24VUOS62MRRE"
        width="30"
        height="30"
        className="d-inline-block align-top navbar-logo-img"
        alt="Learning Booster"
      />
      Learning Booster</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#deets">About</Nav.Link>
            <NavDropdown title='Tools' id="basic-nav-dropdown">
                <NavDropdown.Item eventKey={2} onSelect={showPlanner}>Show planner</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
      <Nav.Link href="#deets">Sing In</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Sign Up
      </Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
}

export default NavBar
