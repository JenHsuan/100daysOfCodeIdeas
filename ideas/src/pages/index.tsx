import ArticleList from '../components/ArticleList'
import { Provider } from 'react-redux';
import store from '../components/store/store'

const Index = () => (
    <Provider store = {store}>
        <ArticleList></ArticleList>
    </Provider>
)
export default Index;