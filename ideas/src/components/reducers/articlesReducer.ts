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
    SetLoadingAction
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
}

const initialState = {
    articles: [],
    filteredArticles: [],
    partialArticles: [],
    isLoading: false,
    showPlanner: false,
    perpage: 18,
    pageCount: 1,
    offset: 0
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

//Reducer
const articlesReducer = (state: ArticlesState = initialState,
    action: GetArticlesAction | GetFilteredArticlesAction | ClearFilterAction |
            SetCategoryAction | ClearCategoryAction | ResetLoadingAction | 
            SetPlannerAction | SetPartialArticlesAction | SetOffsetAction |
            SetPerpageAction | SetPageCountAction | SetLoadingAction) => {
    console.log(action.type)
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
            console.log(action.payload)
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
        default:
            console.log(123)
            return state; 
    }
};

export default articlesReducer;