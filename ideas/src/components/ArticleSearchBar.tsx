import React, {useEffect, createRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { 
    selectFilterTextState
} from './states/states';
import {
    getFilteredArticles,
    clearFilter } from './actions/articlesAction';
import Router, { useRouter } from 'next/router'

const ArticleSearchBar = () => {
    const text = createRef<HTMLInputElement>()
    const router = useRouter()
    const disPatch = useDispatch();
    const filterText = useSelector(selectFilterTextState)
    
    useEffect(() => {
        if (filterText.length !== 0) {
            text.current.value = filterText;
        }
    },[]);

    const onChange = e => {
        if (text.current.value !== '') {
            disPatch(getFilteredArticles(e.target.value));
            if (router.pathname !== '/') {
                Router.push(`/`)
            }
        } else {
            disPatch(clearFilter());
        }
    }

    return (    
        <input className="article-searchbar" ref={text} type="text" placeholder="ex, ReactJS, next.js, Golang..." onChange={onChange}/>
    )
}

export default ArticleSearchBar
