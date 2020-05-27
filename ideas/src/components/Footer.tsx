import React from 'react';
import FooterItem from '../components/FooterItem';
import '../css/footer.css';

const Footer = () => {
    const twitter = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/twitter.png?token=ADKTL32MKL3GQUDXHBMFRGS62NGKE';
    const twitterUrl = 'https://twitter.com/JenHsuanHsieh';
    
    const instagram = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/instagram.png?token=ADKTL36ICZO53PL3SLFZUKK62NF4S';
    const instagramUrl = 'https://www.instagram.com/seanhsgogo/';
    
    const facebook = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/facebook.png?token=ADKTL34CPY4BJ6WUJTYUFJC62NFYS';
    const facebookUrl = 'https://www.facebook.com/imalayman';
    
    const github = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/github.png?token=ADKTL3ZMICFOTYJDRRAPOTK62NF24';
    const githubUrl = 'https://github.com/JenHsuan';
    
    const linkedin = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/linkedin.png?token=ADKTL36L6DTLCBLWBVGXI2S62NGG2';
    const linkedinUrl = 'https://www.linkedin.com/in/jen-hsuan-hsieh-6a13347a/';
    
    const youtube = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/youtube.png?token=ADKTL3YOJLG4MVYO6A7TJGK62NGIU';
    const youtubeUrl = 'https://www.youtube.com/channel/UCQz6a3i_kmuuYXi0hOd8EWQ';
    
    const medium = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/medium-icon.png?token=ADKTL32SDTGL7ZXPUZYXP5S62NF7E';
    const mediumUrl = 'https://medium.com/a-layman';
    
    const devto = 'https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg';
    const devtoUrl = 'https://dev.to/jenhsuan';
    
    const copyrightText = "@2020 Jen-Hsuan Hsieh. All right reserved."
    return (
        <div className="common-footer">
            <div className="common-footer-grid-box">
                <div className="slogon">
                    Learn, Think, Create, and Improve 
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
                </div>
                <div className="subscribe-copyright">
                    {copyrightText}
                </div>
            </div>
        </div>
    )
}

export default Footer
