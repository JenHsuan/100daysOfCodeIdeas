import React, {Fragment} from 'react'
import PageWrapper from '../components/PageWrapper'

const AboutPageContent = () => {
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
            Daily learning provides articles, challenges, or videos to people who are also self-learner for programming. 
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

export default PageWrapper({WrappedComponent: AboutPageContent});
