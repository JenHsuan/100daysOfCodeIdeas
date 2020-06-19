import React, {useEffect, Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
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
    setLogin,
    setFinishedArticles,
    setBookmarks,
    setProvider,
    setUserId
} from './actions/articlesAction';
import Link from 'next/link'

import Router, { useRouter } from 'next/router'


const NavBar = () => {
    const router = useRouter();
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
        localStorage.removeItem('bookmarks');
        localStorage.removeItem('login');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('finishedArticles');
        localStorage.removeItem('token');
        localStorage.removeItem('provider');
    }

    const SetLogout = () => {
        disPatch(setLogout());
        disPatch(setUsername(''));
        disPatch(setUserId(-1));
        disPatch(setEmail(''));
        disPatch(setFinishedArticles([]));
        disPatch(setAccessToken(''));
        disPatch(setProvider(''));
        disPatch(setBookmarks([]));
    }

    const SetLogin = (email, username) => {
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
        
        disPatch(setLogin());
        //local storage
        localStorage.setItem("login", "true");
    }

    useEffect(()=> {
        const login = localStorage.getItem("login");
        if (login !== null && login === 'true') {
            const email = localStorage.getItem("email");
            const username = localStorage.getItem("username");
            SetLogin(email, username);
        }
    }, [])

    useEffect(()=> {
        if (isLogin === false) {
            disPatch(setUsername(''));
        } else {
            const username = localStorage.getItem("username");
            disPatch(setUsername(username));
        }
    }, [isLogin])

    const handleLogout = () => {
        SetLogout();
        SetLogoutForLocalSorage();
        if (router.pathname !== 'signin') {
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
        title="Learning Booster from Sean Hsieh"/>
      Daily Learning</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="about"> 
                <Link href="/about">
                    <a href="/about">About</a>
                </Link>
            </Nav.Link>
            {isLogin && (
                <Fragment>
                    <Nav.Link href="bookmarks"> 
                        <Link href="/bookmarks">
                            <a href="/bookmarks">Plans</a>
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="achievements"> 
                        <Link href="/achievements">
                            <a href="/achievements">Achievements</a>
                        </Link>
                    </Nav.Link>
                </Fragment>
            )}
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
                <NavDropdown.Item onSelect={handleLogout}>
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
