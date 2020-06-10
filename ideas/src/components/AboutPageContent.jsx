import React, {useEffect} from 'react'
import { Provider, useDispatch} from 'react-redux';

import { 
    setPlanner,
} from '../components/actions/articlesAction';

const AboutPageContent = () => {
    const disPatch = useDispatch();
    useEffect(()=> {
        disPatch(setPlanner(false));
    }, [])
    return (
        <div className='column-left-grid-box'>
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
                Jen-Hsuan Hsieh (Sean Hsieh) is also a self-learner, writer, and developer. You can feel free to check the following references.
                <ul>
                    <li>Website</li>
                    <li>Linkedin</li>
                    <li>Medium</li>
                    <li>Github</li>
                </ul>
            </div>
            <div className="about-website-subtitle-3">
            Get In Touch
            </div>
            <div className="about-website-content-3">
            For any general questions, email alaymangogo@gmail.com and we'll get back to you ASAP.    
            </div>
        </div>
    )
}

export default AboutPageContent
