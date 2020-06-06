import ArticleList from '../components/ArticleList'
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../components/store/store'
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import '../css/mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => (
    <div>
        <Head>
            <title>ALayman Learning Booster - Topics</title>
            <link rel="icon" href="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png" type="image/x-icon" />
        </Head>
    <   Provider store = {store}>
        <NavBar></NavBar>
            <div className='grid-box'>
                <SideBar></SideBar>
                <ArticleList></ArticleList>
            </div>
        </Provider>
    </div>
)
export default Index;