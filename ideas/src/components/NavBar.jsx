import React, {Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../css/navbar.css'
import {
    selectShowPlannerState
} from './reducers/articlesReducer';

import { 
    setPlanner
} from './actions/articlesAction';


const NavBar = () => {
    const disPatch = useDispatch();
    const showPlannerFlag = useSelector(selectShowPlannerState);
    const showPlanner = () => {
        if (showPlannerFlag === true) {
            console.log('Hide Planner')
            disPatch(setPlanner(false));
        } else {
            console.log('Show Planner')
            disPatch(setPlanner(true));
        }
    }

    return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
    <Navbar.Brand href="#home">
        <img
        src="https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/logo.png?token=ADKTL377SEGUDAIFK24VUOS62MRRE"
        width="30"
        height="30"
        className="d-inline-block align-top navbar-logo-img"
        alt="Learning Booster"
        title="Learning Booster from Sean Hsieh"/>
      Learning Booster</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#deets">About</Nav.Link>
            <NavDropdown title='Tools' id="basic-nav-dropdown">
                <NavDropdown.Item eventKey={2} onSelect={showPlanner}>Learning Planner</NavDropdown.Item>
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
