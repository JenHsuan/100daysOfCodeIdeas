import React from 'react';
import {Provider} from 'react-redux';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import '../css/achievementspage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AchievementsContent from '../components/AchievementsContent';
import '../css/sidebar.css'
import SideBar from '../components/SideBar';
import GaLayout from '../components/GaLayout';
import CommonHead from '../components/CommonHead';
import {getStatics} from '../components/getStatics';

const achievements = ({jsonLdData}) => {
    const title = "ALayman Daily Learning - Achievements";
    const keywords = "achievements,pie chart";
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
                <div className='achievementspage-grid-box'>
                    <SideBar></SideBar>
                    <AchievementsContent></AchievementsContent>
                </div>
            </Provider>
        </GaLayout>
    )
}

export async function getStaticProps(){
    return await getStatics();
}

export default achievements
