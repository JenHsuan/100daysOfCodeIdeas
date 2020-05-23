import ArticleList from '../components/ArticleList'
import ArticleListSearchBar from '../components/ArticleSearchBar'
import { Provider } from 'react-redux';
import store from '../components/store/store'
import SideBar from '../components/SideBar';
import '../css/mainpage.css';

const Index = () => (
    <Provider store = {store}>
        <div className='grid-box'>
            <SideBar></SideBar>
            <ArticleList></ArticleList>
        </div>
    </Provider>
)
export default Index;