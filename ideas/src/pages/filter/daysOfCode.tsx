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

const daysOfCode = ({jsonLdData}) => {
    const title = "100 Days of Code Challenges";
    const keywords = "Software Development, 100DaysOf Code Challenges";
    const url = "https://daily-learning.herokuapp.com/filter/daysOfCode";
    const description = "It's a challenge of continous writing, programming, and sharing. Welcome to share if you like!";
    const image = "https://raw.githubusercontent.com/JenHsuan/100daysOfCodeIdeas/master/Resources/100daysofcodecover.png";

    return (
    <GaLayout>
        <CommonHead
                title={title}
                keywords={keywords}
                url={url}
                description={description}
                jsonLd={jsonLdData}
                image={image}/>
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

export default daysOfCode;
