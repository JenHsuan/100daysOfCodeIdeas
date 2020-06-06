import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../components/store/store'
import NavBar from '../components/NavBar';
import '../css/planspage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import PlansSidebar from '../components/PlansSideBar'

const plans = () => {
    return (
        <div>
            <Head>
                <title>ALayman Learning Booster - learning plans</title>
                <link rel="icon" href="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png" type="image/x-icon" />
            </Head>
            <Provider store = {store}>
                <NavBar></NavBar>
                <div className='grid-box'>
                <PlansSidebar></PlansSidebar>
                </div>
            </Provider>
        </div>
    )
}

export default plans
