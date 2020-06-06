import axios from 'axios';
//Types
import { 
    GET_ARTICLES,
    GET_FILTERED_ARTICLES,
    SET_PARTIAL_ARTICLES,
    CLEAR_FILTER,
    SET_CATEGORY,
    CLEAR_CATEGORY,
    RESET_LOADING,
    SET_PLANNER,
    SET_PERPAGE,
    SET_PAPE_COUNT,
    SET_OFFSET,
    SET_LOADING,
    SET_LOGIN,
    SET_LOGOUT,
    SET_ACCESS_TOKEN,
    SET_EMAIL,
    SET_USERNAME,
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

export interface SetPartialArticlesAction {
    readonly type: typeof SET_PARTIAL_ARTICLES
    readonly payload: string
}

export interface SetPerpageAction {
    readonly type: typeof SET_PERPAGE
    readonly payload: number
}

export interface SetPageCountAction {
    readonly type: typeof SET_PAPE_COUNT
    readonly payload: number
}

export interface SetOffsetAction {
    readonly type: typeof SET_OFFSET
    readonly payload: number
}

export interface SetLoadingAction {
    readonly type: typeof SET_LOADING
    readonly payload: boolean
}

export interface ClearFilterAction {
    readonly type: typeof CLEAR_FILTER
}

export interface SetLoginAction {
    readonly type: typeof SET_LOGIN
}

export interface SetLogoutAction {
    readonly type: typeof SET_LOGOUT
}

export interface SetAccessTokenAction {
    readonly type: typeof SET_ACCESS_TOKEN
    readonly payload: string
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

export interface SetEmailAction {
    readonly type: typeof SET_EMAIL
    readonly payload: string
}

export interface SetUsernameAction {
    readonly type: typeof SET_USERNAME
    readonly payload: string
}

export const getArticles = () => async dispatch => {
    var res = {data:[]};
    try {
        res = await axios.get('/api/articles');
        await dispatch({
                type: GET_ARTICLES, 
                payload: res.data})
    } catch (error) {
        //res.data = error;
        console.log(error);
    
    }
}

export const getFilteredArticles = text => dispatch => {
    dispatch({
        type: GET_FILTERED_ARTICLES, 
        payload: text})
}

export const setPartialArticles = articles => dispatch => {
    dispatch({
        type: SET_PARTIAL_ARTICLES, 
        payload: articles})
}

export const setLoading = isLoading => dispatch => {
    dispatch({
        type: SET_LOADING, 
        payload: isLoading})
}

export const setOffset = offset => dispatch => {
    dispatch({
        type: SET_OFFSET, 
        payload: offset})
}

export const setPageCount = pageCount => dispatch => {
    dispatch({
        type: SET_PAPE_COUNT, 
        payload: pageCount})
}

export const clearFilter = () => dispatch => {
    dispatch({type: CLEAR_FILTER})
}

export const setLogin = () => dispatch => {
    dispatch({type: SET_LOGIN})
}

export const setLogout = () => dispatch => {
    dispatch({type: SET_LOGOUT})
}

export const setAccessToken = token => dispatch => {
    dispatch({
        type: SET_ACCESS_TOKEN, 
        payload: token})
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

export const setEmail = email => dispatch => {
    dispatch({
        type: SET_EMAIL, 
        payload: email})
}

export const setUsername = username => dispatch => {
    dispatch({
        type: SET_USERNAME, 
        payload: username})
}

