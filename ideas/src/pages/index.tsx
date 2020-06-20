import ArticleList from '../components/ArticleList'
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../components/store/store'
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import '../css/mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/sidebar.css'
import GaLayout from '../components/GaLayout';
import CommonHead from '../components/CommonHead';

const Index = () => {
    const title = "ALayman Daily Learning";
    const keywords = "Software Development, Tesing, DveOps, SRE, Inteviews, Data Sciences";
    const url = "";
    const description = "Daily learning provides articles, challenges, or videos to people who are also self-learner for programming.";

    return (
    <GaLayout>
        <CommonHead
                title={title}
                keywords={keywords}
                url={url}
                description={description}/>
        <Provider store = {store}>
            <NavBar></NavBar>
            <div className='mainpage-grid-box'>
                <SideBar></SideBar>
                <ArticleList></ArticleList>
            </div>
        </Provider>
    </GaLayout>
    )
}

    
export default Index;