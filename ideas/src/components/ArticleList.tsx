import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectArticlesState, getArticles } from './reducers/articlesReducer';
import Article from './Article'
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleList = () => {
    const disPatch = useDispatch();
    const articles = useSelector(selectArticlesState);
    useEffect(()=> {
        disPatch(getArticles());
    }, [])

    useEffect(()=> {
        console.log(articles)
    }, [articles])

    return (
        <div className="container menu-container">
            <div className="row">
            {articles.map(article=>(
                <Article article = {article}/>
            ))}
            </div>
        </div>
    )
}

ArticleList.getInitialProps = async () => {
    let news;
    try {
        const disPatch = useDispatch();    
    } catch (err) {
      news = [];
    }
  
    return {
        news
    }
  }
export default ArticleList;
