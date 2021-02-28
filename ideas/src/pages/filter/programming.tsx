import ArticleList from '../../components/ArticleList'
import { Provider } from 'react-redux';
import store from '../../components/store/store'
import SideBar from '../../components/SideBar';
import NavBar from '../../components/NavBar';
import '../../css/mainpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/sidebar.css'
import GaLayout from '../../components/GaLayout';
import CommonHead from '../../components/CommonHead';
import {getStatics} from '../../components/getStatics';
import '../../components/i18n'
import { useRouter } from 'next/router'

const programming = ({jsonLdData}) => {
    const title = "A-Layman Blog";
    const keywords = "Software Development, Tesing, DveOps, SRE, Inteviews, Data Sciences";
    const url = "https://daily-learning.herokuapp.com/";
    const description = "If you want to love your own value, you have to create value to the world.";

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

export async function getStaticProps(){
    return await getStatics();
}

export default programming
