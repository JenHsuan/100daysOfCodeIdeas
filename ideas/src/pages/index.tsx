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
import axios from 'axios';
import {getJsonId} from '../components/jsonLd';

const Index = ({jsonLdData}) => {
    const title = "ALayman Daily Learning";
    const keywords = "Software Development, Tesing, DveOps, SRE, Inteviews, Data Sciences";
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
            <div className='mainpage-grid-box'>
                <SideBar></SideBar>
                <ArticleList></ArticleList>
            </div>
        </Provider>
    </GaLayout>
    )
}

Index.getInitialProps = async(query) => {
    let jsonLdData = {};
    try {
        var res = await axios.get('https://daily-learning.herokuapp.com/api/articles');
        jsonLdData = getJsonId(res);
    } catch (err) {
        console.log(err);
    }
    //console.log(JSON.stringify(jsonLdData))
    return {jsonLdData: JSON.stringify(jsonLdData)};
  }
    
export default Index;

