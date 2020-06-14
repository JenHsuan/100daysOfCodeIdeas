import React, {useEffect, Fragment} from 'react'
import { Provider, useDispatch} from 'react-redux';

import { 
    setPlanner,
    setLogout
} from '../components/actions/articlesAction';

const AboutPageContent = () => {
    const disPatch = useDispatch();
    useEffect(()=> {
        const refreshToken = async () => {
            try {
                const res = await axios.get('api/renew-token/');
            } catch(error) {
                console.log(error)
                disPatch(setLogout());
                SetLogoutForLocalSorage();
            }
        };
        
        refreshToken();
    }, [])

    const SetLogoutForLocalSorage = () => {
        localStorage.setItem("login", 'false');
        localStorage.setItem("username", '');
        localStorage.setItem("email", '');
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
                Read an article a day 
            </div>
            <div className="about-website-content-1">
            There many information around us today. To improve ourselves, we just need to move a further move every day.
            Daily learning provides articles, challenges, or videos for people who are also self-learner. 
            </div>
            <div className="about-website-subtitle-2">
                About the author
            </div>
            <div className="about-website-content-2">
                Jen-Hsuan Hsieh (Sean Hsieh) is also a self-learner, writer, and developer. He is a senior web developer with front-end JavaScript framework's experiences. He is familiar with React.js, Knockout.js, server-side languages like NodeJS and ASP.NET MVC
            </div>
            <div className="about-website-subtitle-3">
            Get In Touch
            </div>
            <div className="about-website-content-3">
            For any general questions, email alaymangogo@gmail.com and we'll get back to you ASAP.    
            </div>
        </div>
        </Fragment>
    )
}

export default AboutPageContent
