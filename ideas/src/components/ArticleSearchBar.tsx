import React, {useEffect, createRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    selectFilterTextState
} from './states/states';
import {
    getFilteredArticles,
    clearFilter } from './actions/articlesAction';
import Router, { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

const ArticleSearchBar = () => {
    const text = createRef<HTMLInputElement>()
    const router = useRouter()
    const disPatch = useDispatch();
    const filterText = useSelector(selectFilterTextState)
    const { t, i18n } = useTranslation()

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
        <input className="article-searchbar" ref={text} type="text" placeholder={t('SideBar.placeHolderForSearch')} onChange={onChange}/>
    )
}

export default ArticleSearchBar
