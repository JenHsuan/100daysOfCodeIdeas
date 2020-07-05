import React from 'react'
import { Provider } from 'react-redux';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import SignInForm from '../components/SignInForm';
import '../css/sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignFooter from '../components/SignFooter';
import SideBar from '../components/SideBar';
import GaLayout from '../components/GaLayout';
import CommonHead from '../components/CommonHead';
import {getStatics} from '../components/getStatics';

const signin = ({jsonLdData}) => {
    const title = "ALayman Daily Learning - Signin";
    const keywords = "signin";
    const url = "https://daily-learning.herokuapp.com/";
    const description = "Daily learning provides articles, challenges, or videos to people who are also self-learner for programming.";

    return (
        <GaLayout>
            <CommonHead
                title={title}
                keywords={keywords}
                url={url}
                description={description}
                jsonLd={jsonLdData}/>
            <Provider store = {store}>
                <NavBar></NavBar>
                <div className='signin-grid-box'>
                    <SideBar></SideBar>
                    <SignInForm></SignInForm>
                    <SignFooter/>
                </div>
            </Provider>
        </GaLayout>
    )
}

export async function getStaticProps(){
    return await getStatics();
}

export default signin
