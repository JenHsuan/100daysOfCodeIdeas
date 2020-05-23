import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    selectArticlesState,
    selectFilteredArticlesState
    } from './reducers/articlesReducer';
import { getArticles } from './actions/articlesAction';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
import Article from './Article'
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleList = () => {
    const disPatch = useDispatch();
    const articles = useSelector(selectArticlesState);
    const filteredArticles = useSelector(selectFilteredArticlesState);
    useEffect(()=> {
        disPatch(getArticles());
    }, [])

    useEffect(()=> {
        //console.log(articles)
    }, [articles])

    useEffect(()=> {
        console.log(filteredArticles)
    }, [filteredArticles])

    return (
        <div className="articles">
        <div className="container articles" id="menu-container">
            <div className="row">
            {filteredArticles.length !== 0 ? filteredArticles.map(filteredArticle=>(
                    <TransitionGroup>
                        <CSSTransition key={filteredArticle.id} timeout={500} classNames="item">
                            <Article  article = {filteredArticle}/>
                        </CSSTransition>
                    </TransitionGroup>)
            ): articles.map(article=>(
                <TransitionGroup>
                    <CSSTransition key={article.id} timeout={500} classNames="item">
                        <Article article = {article}/>
                    </CSSTransition>
                </TransitionGroup>))
            }
            </div>
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
