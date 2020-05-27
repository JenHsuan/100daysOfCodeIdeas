import {
    GetArticlesAction,
    GetFilteredArticlesAction,
    ClearFilterAction,
    SetCategoryAction,
    ClearCategoryAction,
    ResetLoadingAction,
    SetPlannerAction
} 
from '../actions/articlesAction'
import { RootState} from '../store/store'
//Types
import { 
    GET_ARTICLES,
    GET_FILTERED_ARTICLES,
    CLEAR_FILTER,
    SET_CATEGORY,
    CLEAR_CATEGORY,
    RESET_LOADING,
    SET_PLANNER,
    ArticleType } from '../types'

//Selector functions
export const selectArticlesState = (rootState: RootState) => rootState.articlesReducer.articles;
export const selectFilteredArticlesState = (rootState: RootState) => rootState.articlesReducer.filteredArticles;
export const selectIsLoadingState = (rootState: RootState) => rootState.articlesReducer.isLoading;
export const selectShowPlannerState = (rootState: RootState) => rootState.articlesReducer.showPlanner;

//Initial state
interface ArticlesState {
    articles: Array<ArticleType>;
    filteredArticles: Array<ArticleType>;
    isLoading: boolean;
    showPlanner: boolean;
}

const initialState = {
    articles: [],
    filteredArticles: [],
    isLoading: true,
    showPlanner: false
}

//Reducer
const articlesReducer = (state: ArticlesState = initialState,
    action: GetArticlesAction | GetFilteredArticlesAction | ClearFilterAction | SetCategoryAction | ClearCategoryAction | ResetLoadingAction | SetPlannerAction) => {
    console.log(action.type)
    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                isLoading: false,
                articles: action.payload
            }
        case GET_FILTERED_ARTICLES:
            return {
                ...state,
                isLoading: false,
                filteredArticles: state.articles.filter(article => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return article.title.match(regex) || article.subtitle.match(regex);
                })
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
        default:
            console.log(123)
            return state; 
    }
};

export default articlesReducer;