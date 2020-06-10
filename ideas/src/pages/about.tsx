import React, {useEffect} from 'react'
import { Provider, useDispatch} from 'react-redux';
import Head from 'next/head';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import '../css/aboutpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import AboutPageContent from '../components/AboutPageContent';

const about = () => {
    return (
        <div>
            <Head>
                <title>ALayman Learning Booster - learning plans</title>
                <link rel="icon" href="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png" type="image/x-icon" />
            </Head>
            <Provider store = {store}>
                <NavBar></NavBar>
                <div className='aboutpage-grid-box '>
                    <AboutPageContent/>
                    <div className="footer">
                        <Footer></Footer>
                    </div>
                </div>
            </Provider>
        </div>
    )
}

export default about
