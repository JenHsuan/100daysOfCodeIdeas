import React, {useEffect, Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
    selectShowPlannerState,
    selectArticlesState
} from './states/states';

import {
    selectBookmarksState,
    selectFinishedArticlessState,
    selectLoginState
} from './states/states';

import '.././css/article.css'
import '.././css/card.css'
import Article from './Article'
import {Spinner} from 'react-bootstrap';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

import Footer from '../components/Footer';
import Router, { useRouter } from 'next/router'
import PageWrapper from '../components/PageWrapper'
import { refreshToken } from '../components/account'
import { useTranslation } from 'react-i18next';

const BookmarksContent = () => {
    const disPatch = useDispatch();
    const showPlanner = useSelector(selectShowPlannerState);
    const articles = useSelector(selectArticlesState);
    //const [bookmarks, setBookmarks] = useState([]);
    const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
    const bookmarks = useSelector(selectBookmarksState)
    const finishedArticles = useSelector(selectFinishedArticlessState);
    const isLogin = useSelector(selectLoginState);
    const { t, i18n } = useTranslation();

    useEffect(()=> {
        var tmp = articles.filter(article => -1 !== bookmarks.map(Number).indexOf((article.id)))
        console.log(tmp)
        setBookmarkedArticles(tmp)
    }, [bookmarks, articles])

    useEffect(()=> {
        console.log(bookmarkedArticles);
    }, [bookmarkedArticles])

    useEffect(()=> {
        console.log(finishedArticles);
    }, [finishedArticles])


    useEffect(()=> {
       if (isLogin === false) {
           Router.push(`/signin`)
       }
    }, [isLogin])

    return (
        <Fragment>
            <div className={`${showPlanner === true ? 'bookmarkspage-head' : 'bookmarkspage-head bookmarkspage-head-remove-left'}`}>
                <div className="title">
                    {`${t('BookmarksContent.title')} (${finishedArticles.length}/${bookmarks.length})`}
                </div>
                <div className="subtitle">
                {t('BookmarksContent.subtitle')}
                </div>
            </div>

        <div className={`${showPlanner !== true ? 'articles-hide-siderbar' : 'articles-hide-siderbar articles-hide-siderbar-remove-left'}`}>
            <div className="articles-row row">
                {articles.length === 0 ? (
                <div className='articles-spinner'>{
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                }</div>) : (
                    bookmarkedArticles.map(article=>
                        (<TransitionGroup>
                            <CSSTransition key={article.id} timeout={500} classNames="item">
                                <Article key={article.id} article = {article}/>
                            </CSSTransition>
                        </TransitionGroup>))
                )}
            </div>
            {bookmarkedArticles.length >0 && <Footer/>}
        </div>
        </Fragment>
    )
}

export default PageWrapper({WrappedComponent: BookmarksContent});
