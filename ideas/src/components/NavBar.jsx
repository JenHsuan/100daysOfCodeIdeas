import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import '../css/navbar.css'
import {
    selectShowPlannerState,
    selectLoginState,
    selectUsernameState
} from './states/states';

import { 
    setPlanner,
    setLogout,
    setUsername,
    setAccessToken,
    setEmail,
    setLogin
} from './actions/articlesAction';
import Link from 'next/link'

import Router, { useRouter } from 'next/router'


const NavBar = () => {
    const router = useRouter()
    const disPatch = useDispatch();
    const showPlannerFlag = useSelector(selectShowPlannerState);
    const isLogin = useSelector(selectLoginState);
    const username = useSelector(selectUsernameState);

    const showPlanner = () => {
        if (showPlannerFlag === true) {
            console.log('Hide Planner')
            disPatch(setPlanner(false));
        } else {
            console.log('Show Planner')
            disPatch(setPlanner(true));
        }
    }

    const SetLogoutForLocalSorage = () => {
        localStorage.setItem("login", 'false');
        localStorage.setItem("username", '');
        localStorage.setItem("email", '');
        localStorage.setItem("token", '');
    }

    const SetLogin = (token, email, username) => {
        if (token !== null && token !== undefined && token.length >0 ) {
            disPatch(setLogin());
            disPatch(setAccessToken(token));

            //local storage
            localStorage.setItem("login", "true");
            localStorage.setItem("token", token);

            if (email !== null && email !== undefined && email.length >0 ) {
                disPatch(setEmail(email));

                //local storage
                localStorage.setItem("email", email);
            }
            if (username !== null && username !== undefined && username.length >0 ) {
                disPatch(setUsername(username));

                //local storage
                localStorage.setItem("username", username);
            }
        }
    }

    useEffect(()=> {
        const login = localStorage.getItem("login");
        if (login !== null && login === 'true') {
            const token = localStorage.getItem("token");
            const email = localStorage.getItem("email");
            const username = localStorage.getItem("username");
            SetLogin(token, email, username);
        }
    }, [])

    useEffect(()=> {
        if (isLogin === false) {
            console.log('false')
            disPatch(setUsername(''));
        } else {
            const username = localStorage.getItem("username");
            disPatch(setUsername(username));
        }
    }, [isLogin])

    const handleLogout = () => {
        disPatch(setLogout());
        SetLogoutForLocalSorage();
        if (router.pathname !== 'signin' || router.pathname !== 'signup') {
            Router.push(`/signin`)
        }
    }

    return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
    <Navbar.Brand href="/">
        <img
        src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png"
        width="30"
        height="30"
        className="d-inline-block align-top navbar-logo-img"
        alt="Learning Booster"
        href="/"
        title="Learning Booster from Sean Hsieh"/>
      Learning Booster</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            {router.pathname === '/' && (
            <NavDropdown title='Tools' id="basic-nav-dropdown">
                <NavDropdown.Item eventKey={2} onSelect={showPlanner}>Learning Planner</NavDropdown.Item>
            </NavDropdown>
            )}
            <NavDropdown title='About' id="basic-nav-dropdown">
                <NavDropdown.Item >
                    <Link href="/about">
                        <a href="/about">About us</a>
                    </Link>
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
        {!isLogin && (
            <NavDropdown title='Account' id="basic-nav-dropdown">
                <NavDropdown.Item href="/signin">
                    Sign in
                </NavDropdown.Item>
                <NavDropdown.Item href="/signup">
                    Sign up
                </NavDropdown.Item>
            </NavDropdown>
        )}
        {isLogin && (
            <NavDropdown title={username} id="basic-nav-dropdown">
                <NavDropdown.Item href="/plans">
                    Your plans
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={2} onSelect={handleLogout}>
                    Sign out
                </NavDropdown.Item>
            </NavDropdown>
        )}
        </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
}

export default NavBar
