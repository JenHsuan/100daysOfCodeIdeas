import React from 'react';
import FooterItem from '../components/FooterItem';
import '../css/footer.css';

const Footer = () => {
    const twitter = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/twitter.png';
    const twitterUrl = 'https://twitter.com/JenHsuanHsieh';
    
    const instagram = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/instagram.png';
    const instagramUrl = 'https://www.instagram.com/seanhsgogo/';
    
    const facebook = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/facebook.png';
    const facebookUrl = 'https://www.facebook.com/imalayman';
    
    const github = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/github.png';
    const githubUrl = 'https://github.com/JenHsuan';
    
    const linkedin = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/linkedin.png';
    const linkedinUrl = 'https://www.linkedin.com/in/jen-hsuan-hsieh-6a13347a/';
    
    const youtube = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/youtube.png';
    const youtubeUrl = 'https://www.youtube.com/channel/UCQz6a3i_kmuuYXi0hOd8EWQ';
    
    const medium = 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/medium-icon.png';
    const mediumUrl = 'https://medium.com/a-layman';
    
    const devto = 'https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg';
    const devtoUrl = 'https://dev.to/jenhsuan';
    
    const copyrightText = "@2020 Jen-Hsuan Hsieh. All right reserved."
    return (
        <div className="common-footer">
            <div className="common-footer-grid-box">
                <div className="slogon">
                    Learn, Think, and Improve 
                </div>
                <div className="subscribe-email form-group">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="subscribe-btn">
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                </div>
                <div className="subscribe-social-btn">
                    <span className="btn-o">
                        <a href={twitterUrl}>
                            <img src={twitter} alt="Sean Hsieh's Twiiter" title="Sean Hsieh's Twiiter"/>
                        </a>
                    </span>
                    <span className="btn-o">
                        <a href={facebookUrl}>
                            <img src={facebook} alt="A Layman's Facebook" title="A Layman's Facebook"/>
                        </a>
                    </span>
                    <span className="btn-o">
                        <a href={githubUrl}>
                            <img src={github} alt="A Layman's Facebook" title="A Layman's Facebook"/>
                        </a>
                    </span>
                    <span className="btn-o">
                        <a href={youtubeUrl}>
                            <img src={youtube} alt="Sean Hsieh's Youtube" title="Sean Hsieh's Youtube"/>
                        </a>
                    </span>
                    
                    <span className="btn-o">
                        <a href={mediumUrl}>
                            <img src={medium}/>
                        </a>
                    </span>
                    <span className="btn-o">
                        <a href={linkedinUrl}>
                            <img src={linkedin} alt="Sean Hsieh's Linkedin" title="Sean Hsieh's Linkedin"/>
                        </a>
                    </span>
                    <span className="btn-o">
                        <a href={devtoUrl}>
                            <img src={devto} alt="Sean Hsieh's Dev.to" title="Sean Hsieh's Dev.to"/>
                        </a>
                    </span>
                    <span className="btn-o">
                        <a href={instagramUrl}>
                            <img src={instagram} alt="A Layman's Facebook" title="A Layman's Facebook"/>
                        </a>
                    </span>
                </div>
                <div className="subscribe-copyright">
                    {copyrightText}
                </div>
            </div>
        </div>
    )
}

export default Footer
