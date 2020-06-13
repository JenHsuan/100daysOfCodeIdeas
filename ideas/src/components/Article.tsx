import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { Card} from 'react-bootstrap';
import ArticleModal from '../components/ArticleModal';
import '.././css/article.css'
import '.././css/card.css'
import {
    selectLoginState,
    selectBookmarksState
} from './states/states';

import { 
    setBookmarks,
    removeBookmark
} from './actions/articlesAction';
import Router, { useRouter } from 'next/router'

const Article = ({article}) => {
    const router = useRouter();
    const disPatch = useDispatch();
    const [show, setShow] = useState(false);
    const [isBookmarked, setBookmark] = useState(false);
    const isLogin = useSelector(selectLoginState);
    const bookmarks = useSelector(selectBookmarksState)

    useEffect(()=> {
        if (bookmarks.find(bookmark => bookmark === article.id) !== undefined ) {
            console.log(1)
            setBookmark(true);
        }
    }, [])

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    const onBookmarkClick = () => {
        if (isBookmarked) {
            var bookmarksJson = localStorage.getItem("bookmarks");
            if (bookmarksJson !== null) {
                var bookmarks = JSON.parse(bookmarksJson);
                var newBookmarks = bookmarks.filter(bookmark => bookmark !== article.id);
                localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
                setBookmark(false);
            }
            disPatch(removeBookmark(article.id));
        } else {
            var bookmarksJson = localStorage.getItem("bookmarks");
            console.log(bookmarksJson)
            if (bookmarksJson === null) {
                localStorage.setItem("bookmarks", `[${article.id}]`);
                disPatch(setBookmarks([article.id]));
            } else {
                var bookmarks = JSON.parse(bookmarksJson);
                bookmarks.indexOf(article.id) === -1 ? bookmarks.push(article.id) : console.log("This item already exists");
                localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
                disPatch(setBookmarks(bookmarks));
                setBookmark(true);
            }
            if (router.pathname !== 'bookmarks') {
                Router.push(`/bookmarks`)
            }
        }
    }

    useEffect(()=> {
    }, [])

    return (
        <div className="articles-row">
            <Card className="article-card" border="light">
                {isLogin && (
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
                <Card.Body className="article-card-body">
                    <img className="article-card-img" src={`${article.image}`} alt={article.title} title={article.title}/>
                    <div className="title">{article.title}</div>
                    <div className="date">{article.name}</div>
                    <div className="date">
                        <span className="date">{article.time}</span>
                        <span> . </span>
                        <span className="readtime">{article.readtime}</span>
                    </div>
                    <button className="article-btn" onClick = {handleShow}>Details</button>
                </Card.Body>
            </Card>
            <ArticleModal show = {show} handleClose = {handleClose} article = {article} />
        </div>
    
    )
}

Article.propTypes = {
    article: PropTypes.object.isRequired
}

export default Article
