import React, {useEffect, Fragment} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    selectArticlesState,
    selectFilteredArticlesState,
    selectIsLoadingState
} from './reducers/articlesReducer';

import { 
    getArticles
} from './actions/articlesAction';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

import {Spinner} from 'react-bootstrap';
import Article from './Article'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';

const ArticleList = () => {
    const disPatch = useDispatch();
    const articles = useSelector(selectArticlesState);
    const filteredArticles = useSelector(selectFilteredArticlesState);
    const isLoading = useSelector(selectIsLoadingState);
    
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
        <div className="articles-hide-siderbar">
            <div className="articles-row row">
                {isLoading === true ? (<div className='articles-spinner'>{
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                }</div>) : (
                <Fragment>{
                    filteredArticles.length !== 0 ? filteredArticles.map(filteredArticle=>
                        (<TransitionGroup>
                            <CSSTransition key={filteredArticle.id} timeout={500} classNames="item">
                                <Article  article = {filteredArticle}/>
                            </CSSTransition>
                        </TransitionGroup>)
                    ): articles.map(article=>
                        (<TransitionGroup>
                            <CSSTransition key={article.id} timeout={500} classNames="item">
                                <Article article = {article}/>
                            </CSSTransition>
                        </TransitionGroup>))
                }</Fragment>)}
            </div>
            {isLoading === false && <Footer/>}
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
