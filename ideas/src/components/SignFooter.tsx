import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    selectShowPlannerState,
} from './states/states';

import '../css/sidebar.css'
import Footer from '../components/Footer';
import '../css/signinpage.css';

const SignFooter = () => {
    const showPlanner = useSelector(selectShowPlannerState);
    return (
        <div className={`${showPlanner === true ? 'signin-footer' : 'signin-footer signin-footer-move-left'}`}>
            <Footer/>
        </div>
    )
}

export default SignFooter
