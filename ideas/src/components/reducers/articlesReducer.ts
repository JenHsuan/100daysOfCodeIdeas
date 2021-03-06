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
    SetUsernameAction,
    SetErrorMessageAction,
    SetBookmarksAction,
    RemoveBookmarkAction,
    SetFinishedArticlesAction,
    RemoveFinishedArticleAction,
    SetUserIdAction,
    SetProviderAction,
    SetLanguageAction,
    SetSearchedArticleAction
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
    SET_ERRORMESSAGE,
    REMOVE_BOOKMARK,
    SET_BOOKMARKS,
    SET_MARKASFINISHED,
    SET_UNMARKASFINISHED,
    SET_PROVIDER,
    SET_USERID,
    SET_LANGUAGE,
    SET_SEARCHEDARTICLE,
    ArticleType } from '../types'

//States
import {
    ArticlesState,
    initialState,
} from '../states/states'

//Reducer
const articlesReducer = (state: ArticlesState = initialState,
    action: GetArticlesAction | GetFilteredArticlesAction | ClearFilterAction |
            SetCategoryAction | ClearCategoryAction | ResetLoadingAction |
            SetPlannerAction | SetPartialArticlesAction | SetOffsetAction |
            SetPerpageAction | SetPageCountAction | SetLoadingAction |
            SetLoginAction | SetLogoutAction | SetAccessTokenAction |
            SetEmailAction | SetUsernameAction | SetErrorMessageAction |
            RemoveBookmarkAction | SetBookmarksAction | SetFinishedArticlesAction |
            RemoveFinishedArticleAction | SetProviderAction | SetUserIdAction |
            SetLanguageAction | SetSearchedArticleAction) => {
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
                filterText: action.payload,
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
                category: "-1",
                filteredArticles: []
            }
        case SET_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: action.payload,
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
        case SET_ERRORMESSAGE:
            return {
                ...state,
                errorMessage:action.payload
            }
        case REMOVE_BOOKMARK:
            return {
                ...state,
                bookmarks: state.bookmarks.filter(bookmark => {
                    return bookmark !== action.payload
                })
            }
        case SET_BOOKMARKS:
            return {
                ...state,
                bookmarks: action.payload
            }
        case SET_MARKASFINISHED:
            return {
                ...state,
                finishedArticles: action.payload
            }
        case SET_UNMARKASFINISHED:
            return {
                ...state,
                finishedArticles: state.finishedArticles.filter(finishedArticle => {
                    return finishedArticle !== action.payload
                })
            }
        case SET_PROVIDER:
            return {
                ...state,
                provider: action.payload
            }
        case SET_USERID:
            return {
                ...state,
                userId: action.payload
            }
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        case SET_SEARCHEDARTICLE:
            return {
                ...state,
                searchedArticle: action.payload
            }
        default:
            return state;
    }
};

export default articlesReducer;
