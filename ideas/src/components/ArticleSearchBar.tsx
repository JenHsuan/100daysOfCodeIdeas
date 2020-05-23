import React, {useEffect, createRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredArticlesState} from './reducers/articlesReducer';
import {
    getFilteredArticles,
    clearFilter } from './actions/articlesAction';


const ArticleSearchBar = () => {
    const text = createRef<HTMLInputElement>()
    const disPatch = useDispatch();
    const filteredArticles = useSelector(selectFilteredArticlesState);
    //const text = useRef('');
    //const {filterProducts, clearFilter, filtered} = shoppingCartContext;
    useEffect(() => {
        if (filteredArticles.length === 0) {
            text.current.value = '';
        }
    });

    const onChange = e => {
        if (text.current.value !== '') {
            disPatch(getFilteredArticles(e.target.value));
        } else {
            disPatch(clearFilter());
        }
    }

    return (    
        <input className="articlesfilter" ref={text} type="text" placeholder="Filter articles..." onChange={onChange}/>
    )
}

export default ArticleSearchBar
