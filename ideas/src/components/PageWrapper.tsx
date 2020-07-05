import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import {
    selectArticlesState,
    selectPartialArticlesState,
    selectFilteredArticlesState,
    selectIsLoadingState,
    selectOffsetState,
    selectPageCountState,
    selectPerpageState,
    selectShowPlannerState,
    selectProviderState,
    selectUserIdState,
    selectEmailState,
    selectAccessTokenState,
    selectLoginState
} from './states/states';

import { 
    getArticles,
    setPartialArticles,
    setOffset,
    setPageCount,
    setLogout,
    setBookmarks,
    setUserId,
    setUsername,
    setAccessToken,
    setProvider,
    setFinishedArticles,
    setEmail
} from './actions/articlesAction';
import { refreshToken } from '../components/account'
import { PageWrapperInterface } from '../components/types'

const PageWrapper: PageWrapperInterface = ({WrappedComponent}) => ()=> {
    const disPatch = useDispatch();
    const articles = useSelector(selectArticlesState);
    
    useEffect(()=> {
        //Refresh JWT token or logout
        refreshToken(SetLogout);

        //Fetch articles
        if (articles.length === 0) {
            console.log('fetch articles')
            disPatch(getArticles());
        }

        //Fetch Load bookmarks and finished articles
        var bookmarksJson = localStorage.getItem("bookmarks");
        if (bookmarksJson !== null) {
            var bookmarksList = bookmarksJson.split(',');
            disPatch(setBookmarks(bookmarksList.filter(bookmark => bookmark !== '')))
        }

        var filterArticlesJson = localStorage.getItem("filterArticles");
        if (filterArticlesJson !== null) {
            var filterArticlesList = filterArticlesJson.split(',');
            disPatch(setFinishedArticles(filterArticlesList.filter(filterArticle => filterArticle !== '')))
        }
    }, [])

    const SetLogout = () => {
        disPatch(setLogout());
        disPatch(setUsername(''));
        disPatch(setUserId(-1));
        disPatch(setEmail(''));
        disPatch(setFinishedArticles([]));
        disPatch(setAccessToken(''));
        disPatch(setProvider(''));
        disPatch(setBookmarks([]));
    }

    return (
        <WrappedComponent/>
    )
}

export default PageWrapper
