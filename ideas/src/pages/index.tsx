import ArticleList from '../components/ArticleList'
import ArticleListSearchBar from '../components/ArticleSearchBar'
import { Provider } from 'react-redux';
import store from '../components/store/store'
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../css/mainpage.css';

const Index = () => (
    <Provider store = {store}>
        <NavBar></NavBar>
        <div className='grid-box'>
            <SideBar></SideBar>
            <ArticleList></ArticleList>
            <Footer></Footer>
        </div>
    </Provider>
)
export default Index;