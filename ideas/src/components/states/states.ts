
import { RootState} from '../store/store'
//Types
import {ArticleType } from '../types'

    
//Initial state
export interface ArticlesState {
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

export const initialState = {
    articles: [],
    filteredArticles: [],
    partialArticles: [],
    isLoading: false,
    showPlanner: true,
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
