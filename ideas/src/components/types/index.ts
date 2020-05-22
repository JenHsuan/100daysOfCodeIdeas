export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_FILTERED_ARTICLES = 'GET_FILTERED_ARTICLES';
export const CLEAR_FILTER = 'CLEAR_FILTER';
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