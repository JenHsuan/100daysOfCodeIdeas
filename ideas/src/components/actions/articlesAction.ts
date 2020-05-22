import axios from 'axios';
//Types
import { GET_ARTICLES, GET_FILTERED_ARTICLES, CLEAR_FILTER, ArticleType } from '../types'

//Actions
export interface GetArticlesAction {
    readonly type: typeof GET_ARTICLES
    readonly payload: Array<ArticleType>
}

export interface GetFilteredArticlesAction {
    readonly type: typeof GET_FILTERED_ARTICLES
    readonly payload: string
}

export interface ClearFilterAction {
    readonly type: typeof CLEAR_FILTER
}

export const getArticles = () => async dispatch => {
        const res = await axios.get('/api/articles?category=1');
        console.log(res.data)
        await dispatch({
            type: GET_ARTICLES, 
            payload: res.data})
}

export const getFilteredArticles = text => dispatch => {
    dispatch({
        type: GET_FILTERED_ARTICLES, 
        payload: text})
}

export const clearFilter = () => dispatch => {
    dispatch({type: CLEAR_FILTER})
}
