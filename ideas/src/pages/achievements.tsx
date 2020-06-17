import React, {useEffect} from 'react'
import { Provider, useDispatch} from 'react-redux';
import Head from 'next/head';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import '../css/achievementspage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AchievementsContent from '../components/AchievementsContent';
import '../css/sidebar.css'
import SideBar from '../components/SideBar';
import SignFooter from '../components/SignFooter';

const achievements = () => {
    return (
        <div>
            <Head>
                <title>ALayman Learning Booster - Achievements</title>
                <link rel="icon" href="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png" type="image/x-icon" />
            </Head>
            <Provider store = {store}>
                <NavBar></NavBar>
                <div className='achievementspage-grid-box'>
                    <SideBar></SideBar>
                    <AchievementsContent></AchievementsContent>
                </div>
            </Provider>
        </div>
    )
}

export default achievements
