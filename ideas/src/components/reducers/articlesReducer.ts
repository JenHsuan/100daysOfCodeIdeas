import { Action } from 'redux';
import { RootState} from '../store/store'
import axios from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';
import fetch from "isomorphic-fetch";
//Types
import { GET_ARTICLES, ArticleType } from '../types'

//Actions

interface GetArticlesAction {
    readonly type: typeof GET_ARTICLES
    readonly payload: Array<object>
}

export interface FetchTasksAction extends Action<'GET_ARTICLES'> {
    payload: ArticleType[];
}

export const getArticles = () => async dispatch => {
        const res = await axios.get('/api/articles/');
        console.log(res.data)
        await dispatch({
            type: GET_ARTICLES, 
            payload: res.data})
}


//Selector functions
export const selectArticlesState = (rootState: RootState) => rootState.articlesReducer.articles;

//Initial state
const initialState = {
    articles: [],
}

//Reducer
interface ArticlesState {
    articles: Array<object>;
}

const articlesReducer = (state: ArticlesState = initialState, action: FetchTasksAction) => {
    console.log(action.type)
    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload
            }
        default:
            console.log(123)
            return state; 
    }
};

export default articlesReducer;