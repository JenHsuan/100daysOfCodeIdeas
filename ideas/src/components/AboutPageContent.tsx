import React, {useEffect, Fragment} from 'react'
import { Provider, useDispatch} from 'react-redux';

import { 
    setPlanner,
    setLogout,
    setUsername,
    setProvider,
    setEmail,
    setFinishedArticles,
    setBookmarks,
    setAccessToken
} from './actions/articlesAction';
import axios from 'axios';

const AboutPageContent = () => {
    const disPatch = useDispatch();
    useEffect(()=> {
        const refreshToken = async () => {
            try {
                const res = await axios.get('api/renew-token/');
            } catch(error) {
                console.log(error)
                SetLogout();
                SetLogoutForLocalSorage();
            }
        };
        
        refreshToken();
    }, [])

    const SetLogout = () => {
        disPatch(setLogout());
        disPatch(setUsername(''));
        disPatch(setEmail(''));
        disPatch(setFinishedArticles([]));
        disPatch(setAccessToken(''));
        disPatch(setProvider(''));
        disPatch(setBookmarks([]));
    }

    const SetLogoutForLocalSorage = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('finishedArticles');
        localStorage.removeItem('bookmarks');
        localStorage.removeItem('token');
        localStorage.removeItem('provider');
    }

    return (
        <Fragment>
        <div className="column-top-grid-box">
            <img src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/code-cover-min.png" alt=""/>
        </div>
        <div className="column-right-grid-box">
            <div className="about-website-title">
                About Daily Learning  
            <hr/>
            </div>
            <div className="about-website-subtitle-1">
                Read an Article a Day 
            </div>
            <div className="about-website-content-1">
            There are many information around us today. To improve ourselves, we just need to move a further move every day.
            Daily learning provides articles, challenges, or videos for people who are also self-learner. 
            </div>
            <div className="about-website-subtitle-2">
                About the Author
            </div>
            <div className="about-website-content-2">
                Jen-Hsuan Hsieh (Sean Hsieh) is also a self-learner, writer, and developer. He is a senior web developer with front-end JavaScript framework's experiences. He is familiar with React.js, Knockout.js, server-side languages like NodeJS and ASP.NET MVC
            </div>
            <div className="about-website-subtitle-3">
            Get In Touch
            </div>
            <div className="about-website-content-3">
            For any general questions, email to <a href="ofalpha@gmail.com">ofalpha@gmail.com</a>
            . We'll get back to you ASAP.    
            </div>
        </div>
        </Fragment>
    )
}

export default AboutPageContent
