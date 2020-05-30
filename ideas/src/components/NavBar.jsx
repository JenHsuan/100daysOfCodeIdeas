import React, {Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import '../css/navbar.css'
import {
    selectShowPlannerState
} from './reducers/articlesReducer';

import { 
    setPlanner
} from './actions/articlesAction';
import Link from 'next/link'


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
            <NavDropdown title='Tools' id="basic-nav-dropdown">
                <NavDropdown.Item eventKey={2} onSelect={showPlanner}>Learning Planner</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='About' id="basic-nav-dropdown">
                <NavDropdown.Item >
                    <Link href="/about">
                    About us
                    </Link>
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
            <Nav.Link>
                <Link href="/signin">
                    Sign in
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link href="/signup">
                    Sign up
                </Link>
            </Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
}

export default NavBar
