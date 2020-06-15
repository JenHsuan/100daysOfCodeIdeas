import React, {useEffect, Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
    selectShowPlannerState,
    selectArticlesState
} from './states/states';

import {
    setLogout,
    getArticles,
    setBookmarks,
    setUsername,
    setAccessToken,
    setEmail,
    setProvider,
    setFinishedArticles,
    setUserId
} from './actions/articlesAction';

import {
    selectBookmarksState,
    selectFinishedArticlessState
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

const BookmarksContent = () => {
    const disPatch = useDispatch();
    const showPlanner = useSelector(selectShowPlannerState);
    const articles = useSelector(selectArticlesState);
    //const [bookmarks, setBookmarks] = useState([]);
    const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
    const bookmarks = useSelector(selectBookmarksState)
    const finishedArticles = useSelector(selectFinishedArticlessState);

    useEffect(()=> {
        const refreshToken = async () => {
            try {
                const res = await axios.get('api/renew-token/');
            } catch(error) {
                console.log(error)
                SetLogout();
                SetLogoutForLocalSorage();
                Router.push(`/signin`)
            }
        };
        
        refreshToken();
        if (articles.length === 0) {
            console.log('fetch articles')
            disPatch(getArticles());
        }

        var bookmarksJson = localStorage.getItem("bookmarks");
        if (bookmarksJson !== null) {
            var bookmarks = bookmarksJson.split(',');
            console.log(bookmarks)
            disPatch(setBookmarks(bookmarks))
        }

        var finishedAriclesJson = localStorage.getItem("finishedArticles");
        if (finishedAriclesJson !== null) {
            var finishedAricles = finishedAriclesJson.split(',');
            console.log(finishedAricles)
            disPatch(setFinishedArticles(finishedAricles))
        }
    }, [])

    
    useEffect(()=> {
        console.log(bookmarks);
        var tmp = articles.filter(article => -1 !== bookmarks.indexOf(String(article.id)))
        console.log(tmp)
        setBookmarkedArticles(tmp)
    }, [bookmarks, articles])

    useEffect(()=> {
        console.log(bookmarkedArticles);
    }, [bookmarkedArticles])

    useEffect(()=> {
        console.log(finishedArticles);
    }, [finishedArticles])

    const SetLogoutForLocalSorage = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('finishedArticles');
        localStorage.removeItem('bookmarks');
        localStorage.removeItem('token');
        localStorage.removeItem('provider');
    }

    const SetLogout = () => {
        disPatch(setLogout());
        disPatch(setUsername(''));
        disPatch(setEmail(''));
        disPatch(setFinishedArticles([]));
        disPatch(setAccessToken(''));
        disPatch(setProvider(''));
        disPatch(setBookmarks([]));
        disPatch(setUserId(-1));
    }

    return (
        <Fragment>
            <div className={`${showPlanner === true ? 'bookmarkspage-head' : 'bookmarkspage-head bookmarkspage-head-remove-left'}`}>
                <div className="title">
                    Your Bookmarks
                </div>
                <div className="subtitle">
                    Read articles you have bookmarked
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

export default BookmarksContent
