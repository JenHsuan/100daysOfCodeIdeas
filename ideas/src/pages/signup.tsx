import React from 'react'
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import SignUpForm from '../components/SignUpForm';
import '../css/signinpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import '../css/sidebar.css'

const signup = () => {
    return (
        <div>
            <Head>
                <title>ALayman Learning Booster - Sign up</title>
                <link rel="icon" href="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png" type="image/x-icon" />
            </Head>
            <Provider store = {store}>
                <NavBar></NavBar>
                <div className='signin-ggrid-box'>
                    <SideBar></SideBar>
                    <SignUpForm></SignUpForm>
                    <div className="signin-footer">
                    <Footer/>
                    </div>
                </div>
            </Provider>
        </div>
    )
}

export default signup
