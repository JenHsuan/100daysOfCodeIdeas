export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_FILTERED_ARTICLES = 'GET_FILTERED_ARTICLES';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const SET_CATEGORY = 'SET_CATEGORY';
export const CLEAR_CATEGORY = 'CLEAR_CATEGORY';
export const RESET_LOADING = 'RESET_LOADING';
export const SET_PLANNER = 'SET_PLANNER';

export interface ArticleType {
    title: string;
    subtitle: string;
    image: string;
    url: string;
    time: string;
    name: string;
    readtime: string;
    category: string;
    descrption: string;
}