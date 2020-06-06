import React, {useEffect, Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import {
    selectArticlesState,
    selectPartialArticlesState,
    selectFilteredArticlesState,
    selectIsLoadingState,
    selectOffsetState,
    selectPageCountState,
    selectPerpageState
} from './states/states';

import { 
    getArticles,
    setPartialArticles,
    setOffset,
    setPageCount
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
    const isLoading = useSelector(selectIsLoadingState);
    const articles = useSelector(selectArticlesState);
    const filteredArticles = useSelector(selectFilteredArticlesState);
    const partialArticles = useSelector(selectPartialArticlesState);
    const perpage = useSelector(selectPerpageState);
    const pageCount = useSelector(selectPageCountState);
    const offset = useSelector(selectOffsetState);
    
    useEffect(()=> {
        disPatch(getArticles());
    }, [])

    
    useEffect(()=> {
        console.log('articles updated')
        const partialData = articles.slice(offset, offset + perpage)
        disPatch(setPartialArticles(partialData));
        var count = Math.ceil(articles.length / perpage);
        disPatch(setPageCount(count));
    }, [articles])

    useEffect(()=> {
        console.log('filtered articles updated')
        var count = filteredArticles.length === 0 ? 
        Math.ceil(articles.length / perpage) : Math.ceil(filteredArticles.length / perpage);
        disPatch(setPageCount(count));
        setPartialData();
    }, [filteredArticles])

    useEffect(()=> { 
        var count = filteredArticles.length === 0 ? 
        Math.ceil(articles.length / perpage) : Math.ceil(filteredArticles.length / perpage);
        disPatch(setPageCount(count));
        setPartialData();
        window.scrollTo(0, 0)
    }, [offset])
    
    const setPartialData = () =>  {
        const partialData = filteredArticles.length === 0 ? 
        articles.slice(offset, offset + perpage) : filteredArticles.slice(offset, offset + perpage);
        disPatch(setPartialArticles(partialData));
    }

    const handlePageSlected = e => {
        disPatch(setOffset(e.selected * perpage));
    }

    return (
        <Fragment>
        <div className="articles-hide-siderbar-head">
            <div className="title">
            Learning materials
            </div>
            <div className="subtitle">
                Add the next free article for skills you want to learn to your plan
            </div>
        </div>
        <div className="articles-hide-siderbar">
            <div className="articles-row row">
                {articles.length === 0 ? (<div className='articles-spinner'>{
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                }</div>) : (
                <Fragment>{
                    partialArticles.map(article=>
                        (<TransitionGroup>
                            <CSSTransition key={article.id} timeout={500} classNames="item">
                                <Article key={article.id} article = {article}/>
                            </CSSTransition>
                        </TransitionGroup>))
                }</Fragment>)}
            </div>
            {partialArticles.length >0 && (
                <div className="article-pagination">
                    <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageSlected}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/>
                </div>
            )}
            {partialArticles.length >0 && <Footer/>}
        </div>

        </Fragment>
    )
}
export default ArticleList;
