import React, {useEffect} from 'react'
import { Provider, useDispatch} from 'react-redux';
import Head from 'next/head';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import '../css/planspage.css';
import '../css/sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

import { 
    setPlanner,
} from '../components/actions/articlesAction';
import PlansPageContent from '../components/PlansPageContent'

const plans = () => {

    return (
        <div>
            <Head>
                <title>ALayman Learning Booster - learning plans</title>
                <link rel="icon" href="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png" type="image/x-icon" />
            </Head>
            <Provider store = {store}>
                <NavBar></NavBar>
                <div className='planspage-grid-box'>
                <SideBar></SideBar>
                <PlansPageContent></PlansPageContent>
                </div>
            </Provider>
        </div>
    )
}

export default plans