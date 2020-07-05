import React from 'react';
import {Provider} from 'react-redux';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import '../css/bookmarkspage.css';
import '../css/sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BookmarksContent from '../components/BookmarksContent';
import GaLayout from '../components/GaLayout';
import CommonHead from '../components/CommonHead';
import {getStatics} from '../components/getStatics';

const bookmarks = ({jsonLdData}) => {
    const title = "ALayman Daily Learning - Learning Plans";
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
                <div className='bookmarkspage-grid-box'>
                <SideBar></SideBar>
                <BookmarksContent></BookmarksContent>
                </div>
            </Provider>
        </GaLayout>
    )
}

export async function getStaticProps(){
    return await getStatics();
}

export default bookmarks
