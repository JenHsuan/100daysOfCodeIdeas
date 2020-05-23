import {
    GetArticlesAction,
    GetFilteredArticlesAction,
    ClearFilterAction,
    SetCategoryAction,
    ClearCategoryAction 
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
    ArticleType } from '../types'

//Selector functions
export const selectArticlesState = (rootState: RootState) => rootState.articlesReducer.articles;
export const selectFilteredArticlesState = (rootState: RootState) => rootState.articlesReducer.filteredArticles;

//Initial state
const initialState = {
    articles: [],
    filteredArticles: []
}

//Reducer
interface ArticlesState {
    articles: Array<ArticleType>;
    filteredArticles: Array<ArticleType>;
}

const articlesReducer = (state: ArticlesState = initialState,
    action: GetArticlesAction | GetFilteredArticlesAction | ClearFilterAction | SetCategoryAction | ClearCategoryAction) => {
    console.log(action.type)
    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        case GET_FILTERED_ARTICLES:
            return {
                ...state,
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
                filteredArticles: state.articles.filter(article => {
                    return article.category == action.payload
                })
            }
        case CLEAR_CATEGORY:
            return {
                ...state,
                filteredArticles: []
            }
        default:
            console.log(123)
            return state; 
    }
};

export default articlesReducer;