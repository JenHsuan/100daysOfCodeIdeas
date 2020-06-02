import React from 'react'
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import SignInForm from '../components/SignInForm';
import '../css/signinpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const signin = () => {
    return (
        <div>
            <Head>
                <title>My styled page</title>
            </Head>
            <Provider store = {store}>
                <NavBar></NavBar>
                <div className='grid-box'>
                    <SignInForm></SignInForm>
                    <div className="signin-footer">
                    <Footer/>
                    </div>
                </div>
            </Provider>
        </div>
    )
}

export default signin
