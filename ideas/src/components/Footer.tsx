import React from 'react';
import FooterItem from '../components/FooterItem';
import '../css/footer.css';

const Footer = () => {
    const twitter = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/twitter.png?token=ADKTL32MKL3GQUDXHBMFRGS62NGKE';
    const instagram = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/instagram.png?token=ADKTL36ICZO53PL3SLFZUKK62NF4S';
    const facebook = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/facebook.png?token=ADKTL34CPY4BJ6WUJTYUFJC62NFYS';
    const github = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/github.png?token=ADKTL3ZMICFOTYJDRRAPOTK62NF24';
    const linkedin = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/linkedin.png?token=ADKTL36L6DTLCBLWBVGXI2S62NGG2';
    const youtube = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/youtube.png?token=ADKTL3YOJLG4MVYO6A7TJGK62NGIU';
    const medium = 'https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/ideas/src/images/medium-icon.png?token=ADKTL32SDTGL7ZXPUZYXP5S62NF7E';
    const copyrightText = "@2020 Jen-Hsuan Hsieh. All right reserved."
    return (
        <div className="common-footer">
            <div className="container">
                <div className="row common-footer-row">
                    <div className="follow col-md-4 col-xs-4">
                        <FooterItem imageSrc={twitter} imageAltText="twitter"
                            externalLink="https://twitter.com/JenHsuanHsieh"/>
                        <FooterItem imageSrc={instagram} imageAltText="instagram"
                            externalLink="https://www.instagram.com/seanhsgogo/"/>
                        <FooterItem imageSrc={facebook} imageAltText="facebook"
                            externalLink="https://www.facebook.com/imalayman/"/>
                        <FooterItem imageSrc={github} imageAltText="github"
                            externalLink="https://github.com/JenHsuan"/>
                        <FooterItem imageSrc={linkedin} imageAltText="linkedin"
                                externalLink="https://www.linkedin.com/in/jen-hsuan-hsieh-6a13347a/"/>
                        <FooterItem imageSrc={medium} imageAltText="medium"
                            externalLink="https://medium.com/a-layman"/>
                        <FooterItem imageSrc={youtube} imageAltText="youtube"
                            externalLink="https://www.youtube.com/channel/UCQz6a3i_kmuuYXi0hOd8EWQ"/>
                        <FooterItem imageSrc="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" imageAltText="dev.to"
                            externalLink="https://dev.to/jenhsuan"/>
                    </div>
                    <div className="copyright col-md-4 col-xs-12">
                        <br/>
                        <p>{copyrightText}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
