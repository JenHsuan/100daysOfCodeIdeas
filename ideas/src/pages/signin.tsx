import React from 'react'
import { Provider } from 'react-redux';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import SignInForm from '../components/SignInForm';
import '../css/signinpage.css';

const signin = () => {
    return (
        <Provider store = {store}>
        <NavBar></NavBar>
        <div className='grid-box'>
            <SignInForm></SignInForm>
        </div>
        </Provider>
    )
}

export default signin
