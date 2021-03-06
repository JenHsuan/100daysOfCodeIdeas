import React from 'react';
import {Provider} from 'react-redux';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import '../css/aboutpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import AboutPageContent from '../components/AboutPageContent';
import GaLayout from '../components/GaLayout';
import CommonHead from '../components/CommonHead';
import {getStatics} from '../components/getStatics';
import '../components/i18n'


const about = ({jsonLdData}) => {
    const title = "ALayman Daily Learning - About Daily Learning";
    const keywords = "about,contacts,learning";
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
                <div className='aboutpage-grid-box'>
                    <AboutPageContent/>
                    <div className="footer">
                        <Footer></Footer>
                    </div>
                </div>
            </Provider>
        </GaLayout>
    )
}

export async function getStaticProps(){
    return await getStatics();
}

export default about
