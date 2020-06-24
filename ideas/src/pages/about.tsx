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
import axios from 'axios';
import {getJsonId} from '../components/jsonLd';

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

about.getInitialProps = async (query) => {
    let jsonLdData = {};
    try {
        var res = await axios.get('/api/articles');
        jsonLdData = getJsonId(res);
    } catch (err) {
        console.log(err);
    }
    console.log(JSON.stringify(jsonLdData))
    return {jsonLdData: JSON.stringify(jsonLdData)};
  }

export default about
