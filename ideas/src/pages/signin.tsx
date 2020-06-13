import React from 'react'
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import SignInForm from '../components/SignInForm';
import '../css/sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignFooter from '../components/SignFooter';
import SideBar from '../components/SideBar';

const signin = () => {
    return (
        <div>
            <Head>
                <title>ALayman Learning Booster - Sign in</title>
                <link rel="icon" href="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png" type="image/x-icon" />
            </Head>
            <Provider store = {store}>
                <NavBar></NavBar>
                <div className='signin-grid-box'>
                    <SideBar></SideBar>
                    <SignInForm></SignInForm>
                    <SignFooter/>
                </div>
            </Provider>
        </div>
    )
}

export default signin