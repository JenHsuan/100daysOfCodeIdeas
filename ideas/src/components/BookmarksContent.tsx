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
    setBookmarks
} from './actions/articlesAction';

import {
    selectBookmarksState
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

    useEffect(()=> {
        const refreshToken = async () => {
            try {
                const res = await axios.get('api/renew-token/');
            } catch(error) {
                console.log(error)
                disPatch(setLogout());
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
            var bookmarks = JSON.parse(bookmarksJson);
            console.log(bookmarks)
            disPatch(setBookmarks(bookmarks))
        }
    }, [])

    
    useEffect(()=> {
        console.log(bookmarks);
        var tmp = articles.filter(article => -1 !== bookmarks.indexOf(article.id))
        console.log(tmp)
        setBookmarkedArticles(tmp)
    }, [bookmarks, articles])

    useEffect(()=> {
        console.log(bookmarkedArticles);
    }, [bookmarkedArticles])

    const SetLogoutForLocalSorage = () => {
        localStorage.setItem("login", 'false');
        localStorage.setItem("username", '');
        localStorage.setItem("email", '');
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
