import axios from 'axios';
//Types
import { 
    GET_ARTICLES,
    GET_FILTERED_ARTICLES,
    CLEAR_FILTER,
    SET_CATEGORY,
    CLEAR_CATEGORY,
    RESET_LOADING,
    SET_PLANNER,
    ArticleType 
} from '../types'

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

export interface SetCategoryAction {
    readonly type: typeof SET_CATEGORY
    readonly payload: string
}

export interface ClearCategoryAction {
    readonly type: typeof CLEAR_CATEGORY
}

export interface ResetLoadingAction {
    readonly type: typeof RESET_LOADING
}

export interface SetPlannerAction {
    readonly type: typeof SET_PLANNER
    readonly payload: boolean
}

export const getArticles = () => async dispatch => {
        const res = await axios.get('/api/articles');
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

export const setCategory = category => dispatch => {
    dispatch({
        type: SET_CATEGORY, 
        payload: category})
}

export const clearCategory = () => dispatch => {
    dispatch({type: CLEAR_CATEGORY})
}

export const resetLoading = () => dispatch => {
    dispatch({type: RESET_LOADING})
}

export const setPlanner = showPlanner => dispatch => {
    dispatch({
        type: SET_PLANNER, 
        payload: showPlanner})
}


