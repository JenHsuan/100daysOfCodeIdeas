import React, {useEffect, Fragment, useState, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import {
    selectArticlesState,
    selectPartialArticlesState,
    selectFilteredArticlesState,
    selectIsLoadingState,
    selectOffsetState,
    selectPageCountState,
    selectPerpageState,
    selectShowPlannerState,
    selectLoginState
} from './states/states';

import {
    setPartialArticles,
    setOffset,
    setPageCount,
    setLogout,
} from './actions/articlesAction';

import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

import {Spinner} from 'react-bootstrap';
import Article from './Article'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import Router, { useRouter } from 'next/router'
import ArticleSearchBar from './ArticleSearchBar';
import { useMediaPredicate } from "react-media-hook";
import { ArticleType } from './types';
import PageWrapper from '../components/PageWrapper'
import { refreshToken } from '../components/account'
import { useTranslation } from 'react-i18next';

const ArticleList = () => {
    const disPatch = useDispatch();
    const router = useRouter()
    const isLoading = useSelector(selectIsLoadingState);
    const articles = useSelector(selectArticlesState);
    const filteredArticles = useSelector(selectFilteredArticlesState);
    const partialArticles = useSelector(selectPartialArticlesState);
    const perpage = useSelector(selectPerpageState);
    const pageCount = useSelector(selectPageCountState);
    const offset = useSelector(selectOffsetState);
    const showPlanner = useSelector(selectShowPlannerState);
    const smallerThan800 = useMediaPredicate("(max-width: 800px)");
    const isLogin = useSelector(selectLoginState);
    const { t, i18n } = useTranslation();

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
        //Refresh JWT token or logout
        refreshToken(()=>{});

        disPatch(setOffset(e.selected * perpage));
    }

    return (
        <Fragment>
        <div className={`${showPlanner === true ? 'articles-hide-siderbar-head' : 'articles-hide-siderbar-head articles-hide-siderbar-head-remove-left'}`}>
            <div className="title">
                {`${t('ArticleList.learningMaterials')} (${filteredArticles.length === 0 ? articles.length : filteredArticles.length})`}
            </div>
            {isLogin ? (
                <div className="subtitle">
                    {t('ArticleList.title')}
                </div>) : (
                <div className="subtitle">
                    <a href="/signin">{t('ArticleList.login')}</a>
                    {t('ArticleList.subTitle')}
                </div>)}
            {smallerThan800 && <ArticleSearchBar/>}
        </div>
        <div className={`${showPlanner !== true ? 'articles-hide-siderbar' : 'articles-hide-siderbar articles-hide-siderbar-remove-left'}`}>
            <div className="articles-row row">
                {articles.length === 0 ? (
                <div className='articles-spinner'>{
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                }</div>) : (
                    (partialArticles as ArticleType[]).map(article=>
                        (<TransitionGroup>
                            <CSSTransition key={article.id} timeout={500} classNames="item">
                                <Article key={article.id} article = {article}/>
                            </CSSTransition>
                        </TransitionGroup>))
                )}
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
export default PageWrapper({WrappedComponent: ArticleList});
