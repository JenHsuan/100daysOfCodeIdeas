import ArticleList from '../components/ArticleList'
import ArticleListSearchBar from '../components/ArticleSearchBar'
import { Provider } from 'react-redux';
import store from '../components/store/store'
import ArticleSearchBar from '../components/ArticleSearchBar';

const Index = () => (
    <Provider store = {store}>
        <ArticleSearchBar></ArticleSearchBar>
        <ArticleList></ArticleList>
    </Provider>
)
export default Index;