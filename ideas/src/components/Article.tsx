import React, {useEffect, useState, FunctionComponent, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { Card} from 'react-bootstrap';
import ArticleModal from '../components/ArticleModal';
import '.././css/article.css'
import '.././css/card.css'
import {
    selectLoginState,
    selectBookmarksState,
    selectProviderState,
    selectUserIdState,
    selectEmailState,
    selectFinishedArticlessState,
    selectFilteredArticlesState,
    selectShowPlannerState
} from './states/states';

import {
    setBookmarks,
    removeBookmark,
    setFinishedArticles,
    removeFinishedArticle
} from './actions/articlesAction';
import Router, { useRouter } from 'next/router'
import axios from 'axios';
import {
    ArticleProp,
    ArticleType
 } from '../components/types'

import { useTranslation } from 'react-i18next';
import { authorLinkMap } from './configruration';

const Article: FunctionComponent<ArticleProp> = ({article}: ArticleProp) => {
    const router = useRouter();
    const disPatch = useDispatch();
    const [show, setShow] = useState(false);
    const [isBookmarked, setBookmark] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const [articleImg, setArticleImg] = useState(null);
    const isLogin = useSelector(selectLoginState);
    const bookmarks = useSelector(selectBookmarksState);
    const userId = useSelector(selectUserIdState);
    const provider = useSelector(selectProviderState);
    const email = useSelector(selectEmailState);
    const finishedArticles = useSelector(selectFinishedArticlessState);
    const articleRef = useRef();
    const { t, i18n } = useTranslation();
    const filteredArticles = useSelector(selectFilteredArticlesState);
    const showPlannerFlag = useSelector(selectShowPlannerState);
    const isFilterMode = filteredArticles.length !== 0 && showPlannerFlag && !isLogin;

    const callback = entries => {
        for (let entry of entries) {
            if (entry.isIntersecting) {
                setArticleImg(article.image);
                if (articleRef.current) {
                    observer.unobserve(articleRef.current)
                }
            }
        }
    };

    const observer = new IntersectionObserver(callback);

    useEffect(() => {
        observer.observe(articleRef.current)
    }, []);

    useEffect(()=> {

        if (bookmarks.find(bookmark => bookmark == article.id) !== undefined) {
            console.log('bookmark')
            setBookmark(true);
        }
    }, [bookmarks])

    useEffect(()=> {
        if (finishedArticles.find(finishedArticle => finishedArticle === article.id) !== undefined ) {
            console.log('finishedArticle')
            setChecked(true);
        }
    }, [finishedArticles])

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    const handleCheckingTrue = async () => {
        let finishedArticlesString = localStorage.getItem("finishedArticles");
        let finishedArticlesList;
        let localfinishedArticles;
        if (finishedArticlesString === '') {
            localfinishedArticles = `${article.id}`;
            finishedArticlesList = [article.id];
        } else {
            finishedArticlesList = finishedArticlesString.split(',');
            finishedArticlesList.indexOf(article.id) === -1 ? finishedArticlesList.push(article.id) : console.log("This item already exists");
        }
        //set bookmarks to local state
        setChecked(true);

        let newfinishedArticlesString = finishedArticlesList.join();
        //set bookmarks to localStorage
        localStorage.setItem("finishedArticles", newfinishedArticlesString);
        //set bookmarks to global state
        disPatch(setFinishedArticles(finishedArticlesList));
        //update server
        if (provider === 'normal') {
            try {
                const res = await axios.put(`api/profile/?finishedArticles=${newfinishedArticlesString}&reader_id=${userId}`);
            } catch(error) {
                console.log(error)
            }
        } else {
            try {
                const res = await axios.put(`api/profilesocial/?finishedArticles=${newfinishedArticlesString}&email=${email}&provider=${provider}`);
            } catch(error) {
                console.log(error)
            }
        }
    }

    const handleCheckingFalse = async() => {
        let finishedArticlesString = localStorage.getItem("finishedArticles");
        if (isChecked) {
            if (finishedArticlesString !== null) {
                let finishedArticlesList = finishedArticlesString.split(',');
                finishedArticlesList = finishedArticlesList.filter(finishedArticle => Number(finishedArticle) !== article.id);
                let newfinishedArticlesString = finishedArticlesList.join();
                //set bookmarks to localStorage
                localStorage.setItem("finishedArticles", newfinishedArticlesString);
                //set bookmarks to global state
                disPatch(setFinishedArticles(finishedArticlesList));
                //update server
                if (provider === 'normal') {
                    try {
                        const res = await axios.put(`api/profile/?finishedArticles=${newfinishedArticlesString}&reader_id=${userId}`);
                    } catch(error) {
                        console.log(error)
                    }
                } else {
                    try {
                        const res = await axios.put(`api/profilesocial/?finishedArticles=${newfinishedArticlesString}&email=${email}&provider=${provider}`);
                    } catch(error) {
                        console.log(error)
                    }
                }
            }
            //set bookmarks to local state
            setChecked(false);
        }


    }

    const setBookmarksState = async (bookmarksList) => {
        let newbookmarksString = bookmarksList.join();
        //set bookmarks to localStorage
        localStorage.setItem("bookmarks", newbookmarksString);
        //set bookmarks to global state
        disPatch(setBookmarks(bookmarksList));
        //update server
        if (provider === 'normal') {
            try {
                const res = await axios.put(`api/profile/?bookmarks=${newbookmarksString}&reader_id=${userId}`);
            } catch(error) {
                console.log(error)
            }
        } else {
            try {
                const res = await axios.put(`api/profilesocial/?bookmarks=${newbookmarksString}&email=${email}&provider=${localStorage.getItem("provider")}`);
            } catch(error) {
                console.log(error)
            }
        }
    }
    const onBookmarkClick = async () => {
        let bookmarksString = localStorage.getItem("bookmarks");
        let localBookmarks;
        let bookmarksList;
        if (isBookmarked) {
            if (bookmarksString !== null) {
                bookmarksList = bookmarksString.split(',');
                bookmarksList = bookmarksList.filter(bookmark => Number(bookmark) !== article.id);
            }
            //set bookmarks to local state
            setBookmark(false);

            await setBookmarksState(bookmarksList);
        } else {
            if (bookmarksString === '') {
                console.log(999)
                localBookmarks = `${article.id}`;
                bookmarksList = [article.id];
            } else {
                bookmarksList = bookmarksString.split(',');
                bookmarksList.indexOf(article.id) === -1 ? bookmarksList.push(article.id) : console.log("This item already exists");
            }
            //set bookmarks to local state
            setBookmark(true);

            await setBookmarksState(bookmarksList);
            //redirect
            if (router.pathname !== 'bookmarks') {
                Router.push(`/bookmarks`)
            }
        }


    }

    useEffect(()=> {
    }, [])

    return (
        <div className="articles-row">
            <Card className={isFilterMode ? 'searched-article-card' : 'article-card'} border="light">
                {isLogin && router.pathname !== '/bookmarks' && (
                <div className="article-bookmark">
                    <span className="btn-o">
                        <a href='#' onClick={()=>{onBookmarkClick(); return false;}}>
                            {isBookmarked
                            ? <img src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/bookmark-yellow.png" alt="Add this article to the bookmark" title="Add this article to the bookmark"/>
                            : <img src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/bookmark-white.png" alt="Add this article to the bookmark" title="Add this article to the bookmark"/>
                            }
                        </a>
                    </span>
                </div>
                )}
                {router.pathname === '/bookmarks' && (
                <div className="article-checked">
                    <span className="btn-o">
                        <a href='#' onClick={()=>{handleCheckingFalse(); return false;}}>
                            {isChecked
                            ? <img src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/check.png" alt="Marked as unfinished" title="Marked as unfinished"/>
                            : <img src="https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/uncheck.png" alt="Marked as finished" title="Marked as finished"/>
                            }
                        </a>
                    </span>
                </div>
                )}
                <Card.Body className="article-card-body">
                    <img className="article-card-img" ref={articleRef} src={articleImg} alt={article.title} title={article.title}/>
                    <div className="title">{article.title}</div>
                    {!isFilterMode && (
                        <>
                        <div className="date">
                            <a href={authorLinkMap[article.name]}>{article.name}</a>
                            </div>
                        <div className="date">
                            <span className="date">{article.time.split("T")[0]}</span>
                            <span> . </span>
                            <span className="readtime">{`${article.readtime.split(" ")[0]}${t('Article.readTime')}`}</span>
                        </div>
                        <button className="article-btn" onClick = {handleShow}>{t('Article.details')}</button>
                        </>
                    )}
                </Card.Body>
            </Card>
            <ArticleModal show = {show} handleClose = {handleClose} article = {article} handleOpen={handleCheckingTrue}/>
        </div>

    )
}


export default Article
