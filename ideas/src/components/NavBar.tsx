import React, {useEffect, Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, NavDropdown, InputGroup} from 'react-bootstrap';
import '../css/navbar.css'
import {
    selectShowPlannerState,
    selectLoginState,
    selectUsernameState,
    selectLanguageState
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
    setUserId,
    setLanguage
} from './actions/articlesAction';
import Link from 'next/link'

import Router, { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const NavBar = () => {
    const router = useRouter();
    const disPatch = useDispatch();
    const showPlannerFlag = useSelector(selectShowPlannerState);
    const isLogin = useSelector(selectLoginState);
    const username = useSelector(selectUsernameState);
    const language = useSelector(selectLanguageState);

    const { t, i18n } = useTranslation()

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

        let lang = localStorage.getItem("daily-learning-lang");
        disPatch(setLanguage(lang));
        i18n.changeLanguage(lang)
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

    const changeLanguage = e => {
        let lang = e.target.value;
        disPatch(setLanguage(lang));
        i18n.changeLanguage(lang)
        localStorage.setItem("daily-learning-lang", lang);
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
                    <a>{t('NavBar.about')}</a>
                </Link>
            </Nav.Link>
            {isLogin && (
                <Fragment>
                    <Nav.Link href="bookmarks">
                        <Link href="/bookmarks">
                            <a>{t('NavBar.plans')}</a>
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="achievements">
                        <Link href="/achievements">
                            <a>{t('NavBar.achievements')}</a>
                        </Link>
                    </Nav.Link>
                </Fragment>
            )}
        </Nav>
        <Nav>
            <NavDropdown title={t('NavBar.language')} id="basic-nav-dropdown">
                    <InputGroup className="language-dropdown">
                        <InputGroup.Prepend>
                            <InputGroup.Radio aria-label="Radio button for following text input" value = "en" onClick={e => changeLanguage(e)} checked={language.toLowerCase() === "en"}/>
                            <InputGroup.Text className="language-dropdown-item">English - EN</InputGroup.Text>
                        </InputGroup.Prepend>
                        <InputGroup.Prepend>
                            <InputGroup.Radio aria-label="Radio button for following text input" value = "ja" onClick={e => changeLanguage(e)} checked={language.toLowerCase() === "ja"}/>
                            <InputGroup.Text className="language-dropdown-item">日本語 - JA</InputGroup.Text>
                        </InputGroup.Prepend>
                        <InputGroup.Prepend>
                            <InputGroup.Radio aria-label="Radio button for following text input" value = "zh-TW" onClick={e => changeLanguage(e)} checked={language.toLowerCase() === "zh-tw"}/>
                            <InputGroup.Text className="language-dropdown-item">繁體中文 - ZH</InputGroup.Text>
                        </InputGroup.Prepend>
                        <InputGroup.Prepend>
                            <InputGroup.Radio aria-label="Radio button for following text input" value = "zh-CN" onClick={e => changeLanguage(e)} checked={language.toLowerCase() === "zh-cn"}/>
                            <InputGroup.Text className="language-dropdown-item">簡體中文 - ZH</InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
            </NavDropdown>
        </Nav>
        <Nav>
        {!isLogin && (
            <NavDropdown title={t('NavBar.account')} id="basic-nav-dropdown">
                <NavDropdown.Item href="/signin">
                    {t('NavBar.signIn')}
                </NavDropdown.Item>
                <NavDropdown.Item href="/signup">
                    {t('NavBar.signUp')}
                </NavDropdown.Item>
                <NavDropdown.Item href="/feed">
                    {t('NavBar.rss')}
                </NavDropdown.Item>
                <NavDropdown.Item href="/downloads">
                    {t('NavBar.download')}
                </NavDropdown.Item>
            </NavDropdown>
        )}
        {isLogin && (
            <NavDropdown title={username} id="basic-nav-dropdown">
                <NavDropdown.Item onSelect={handleLogout}>
                    {t('NavBar.signOut')}
                </NavDropdown.Item>
                <NavDropdown.Item href="/feed">
                    {t('NavBar.rss')}
                </NavDropdown.Item>
                <NavDropdown.Item href="/downloads">
                    {t('NavBar.download')}
                </NavDropdown.Item>
            </NavDropdown>
        )}
        </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
}

export default NavBar
