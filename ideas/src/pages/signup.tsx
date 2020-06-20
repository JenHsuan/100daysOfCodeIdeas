import React from 'react'
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import SignUpForm from '../components/SignUpForm';
import '../css/signinpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignFooter from '../components/SignFooter';
import SideBar from '../components/SideBar';
import '../css/sidebar.css'
import GaLayout from '../components/GaLayout';
import CommonHead from '../components/CommonHead';

const signup = () => {
    const title = "ALayman Daily Learning - Signup";
    const keywords = "signup";
    const url = "https://daily-learning.herokuapp.com/";
    const description = "Daily learning provides articles, challenges, or videos to people who are also self-learner for programming.";

    return (
        <GaLayout>
            <CommonHead
                title={title}
                keywords={keywords}
                url={url}
                description={description}/>
            <Provider store = {store}>
                <NavBar></NavBar>
                <div className='signin-grid-box'>
                    <SideBar></SideBar>
                    <SignUpForm></SignUpForm>
                    <SignFooter/>
                </div>
            </Provider>
        </GaLayout>
    )
}

export default signup
