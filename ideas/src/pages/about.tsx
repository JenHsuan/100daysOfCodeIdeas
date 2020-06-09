import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import '../css/aboutpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

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
                    <div className='column-left'>
                        123
                    </div>
                    <div className="footer">
                        <Footer></Footer>
                    </div>
                </div>
            </Provider>
        </div>
    )
}

export default about
