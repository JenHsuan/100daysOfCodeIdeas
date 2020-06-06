import {
    GetArticlesAction,
    GetFilteredArticlesAction,
    SetPartialArticlesAction,
    ClearFilterAction,
    SetCategoryAction,
    ClearCategoryAction,
    ResetLoadingAction,
    SetOffsetAction,
    SetPerpageAction,
    SetPageCountAction,
    SetPlannerAction,
    SetLoadingAction,
    SetLoginAction,
    SetLogoutAction,
    SetAccessTokenAction,
    SetEmailAction,
    SetUsernameAction
} 
from '../actions/articlesAction'
import { RootState} from '../store/store'

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
    SET_PAPE_COUNT,
    SET_PERPAGE,
    SET_OFFSET,
    SET_LOADING,
    SET_LOGIN,
    SET_LOGOUT,
    SET_ACCESS_TOKEN,
    SET_EMAIL,
    SET_USERNAME,
    ArticleType } from '../types'

//Initial state
interface ArticlesState {
    articles: Array<ArticleType>;
    filteredArticles: Array<ArticleType>;
    partialArticles: Array<ArticleType>;
    isLoading: boolean;
    showPlanner: boolean;
    perpage: number;
    pageCount: number;
    offset: number;
    isLogin: boolean;
    accessToken: string;
    email: string;
    username: string;
}

const initialState = {
    articles: [],
    filteredArticles: [],
    partialArticles: [],
    isLoading: false,
    showPlanner: false,
    perpage: 18,
    pageCount: 1,
    offset: 0,
    isLogin: false,
    accessToken: '',
    email:'',
    username:''
}

//Selector functions
export const selectArticlesState = (rootState: RootState) => rootState.articlesReducer.articles;
export const selectFilteredArticlesState = (rootState: RootState) => rootState.articlesReducer.filteredArticles;
export const selectPartialArticlesState = (rootState: RootState) => rootState.articlesReducer.partialArticles;
export const selectIsLoadingState = (rootState: RootState) => rootState.articlesReducer.isLoading;
export const selectShowPlannerState = (rootState: RootState) => rootState.articlesReducer.showPlanner;
export const selectPerpageState = (rootState: RootState) => rootState.articlesReducer.perpage;
export const selectPageCountState = (rootState: RootState) => rootState.articlesReducer.pageCount;
export const selectOffsetState = (rootState: RootState) => rootState.articlesReducer.offset;
export const selectLoadingState = (rootState: RootState) => rootState.articlesReducer.isLoading;
export const selectLoginState = (rootState: RootState) => rootState.articlesReducer.isLogin;
export const selectAccessTokenState = (rootState: RootState) => rootState.articlesReducer.accessToken;
export const selectEmailState = (rootState: RootState) => rootState.articlesReducer.email;
export const selectUsernameState = (rootState: RootState) => rootState.articlesReducer.username;

//Reducer
const articlesReducer = (state: ArticlesState = initialState,
    action: GetArticlesAction | GetFilteredArticlesAction | ClearFilterAction |
            SetCategoryAction | ClearCategoryAction | ResetLoadingAction | 
            SetPlannerAction | SetPartialArticlesAction | SetOffsetAction |
            SetPerpageAction | SetPageCountAction | SetLoadingAction |
            SetLoginAction | SetLogoutAction | SetAccessTokenAction |
            SetEmailAction | SetUsernameAction) => {
    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                isLoading: false,
                articles: action.payload,
                offset: 0,
                partialArticles: action.payload.slice(0, state.perpage)
            }
        case GET_FILTERED_ARTICLES:
            return {
                ...state,
                isLoading: false,
                filteredArticles: state.articles.filter(article => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return article.title.match(regex) || article.subtitle.match(regex);
                }),
                offset: 0,
                partialArticles: state.articles.filter(article => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return article.title.match(regex) || article.subtitle.match(regex);
                })
            }
        case SET_PARTIAL_ARTICLES:
            return {
                ...state,
                isLoading: false,
                partialArticles: action.payload
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filteredArticles: []
            }
        case SET_CATEGORY:
            return {
                ...state,
                isLoading: false,
                filteredArticles: state.articles.filter(article => {
                    return article.category == action.payload
                })
            }
        case CLEAR_CATEGORY:
            return {
                ...state,
                filteredArticles: []
            }
        case RESET_LOADING:
            return {
                ...state,
                isLoading: false
            }
        case SET_PLANNER:
            return {
                ...state,
                showPlanner: action.payload
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_OFFSET:
            return {
                ...state,
                offset: action.payload
            }
        case SET_PAPE_COUNT:
            return {
                ...state,
                pageCount: action.payload
            }
        case SET_PERPAGE:
            return {
                ...state,
                perpage: action.payload
            }
        case SET_LOGIN:
            return {
                ...state,
                isLogin: true
            }
        case SET_LOGOUT:
            return {
                ...state,
                isLogin: false
            }
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken:action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email:action.payload
            }
        case SET_USERNAME:
            return {
                ...state,
                username:action.payload
            }
        default:
            return state; 
    }
};

export default articlesReducer;