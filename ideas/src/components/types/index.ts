import { FunctionComponent } from 'react'

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_FILTERED_ARTICLES = 'GET_FILTERED_ARTICLES';
export const CLEAR_FILTER = 'CLEAR_FILTER';
export const SET_CATEGORY = 'SET_CATEGORY';
export const CLEAR_CATEGORY = 'CLEAR_CATEGORY';
export const RESET_LOADING = 'RESET_LOADING';
export const SET_PLANNER = 'SET_PLANNER';
export const SET_PARTIAL_ARTICLES = 'SET_PARTIAL_ARTICLES';
export const SET_PERPAGE = 'SET_PERPAGE';
export const SET_PAPE_COUNT = 'SET_PAPE_COUNT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_LOADING = 'SET_LOADING';
export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_USERNAME = 'SET_USERNAME';
export const SET_ERRORMESSAGE = 'SET_ERRORMESSAGE';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const SET_BOOKMARKS = 'SET_BOOKMARKS';
export const SET_MARKASFINISHED = 'SET_MARKASFINISHED';
export const SET_UNMARKASFINISHED = 'SET_UNMARKASFINISHED';
export const SET_PROVIDER = 'SET_PROVIDER';
export const SET_USERID = 'SET_USERID';
export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_SEARCHEDARTICLE = 'SET_SEARCHEDARTICLE';

export interface ArticleType {
    id: number;
    title: string;
    subtitle: string;
    image: string;
    url: string;
    time: string;
    name: string;
    readtime: string;
    category: string;
    description: Array<string>;
}

export interface ArticleProp{
    article: ArticleType
}

export interface ArticleModalProp{
    show: Boolean;
    handleClose: () => void;
    article: ArticleType;
    handleOpen: () => void;
}

export interface CommandHeadProp{
    title: string;
    url: string;
    description: string;
    keywords: string;
    jsonLd: string;
    image?: string;
}

export interface SignInFormProp {
    responseFacebook: () => void;
    ResponseGithubOnSuccess: () => void;
    ResponseGithubOnFailure: () => void;
    SetLogin: (token: string, email: string, username: string, provider: string) => void;
}

export interface FormWrapperProp{
    WrappedComponent: FunctionComponent<SignInFormProp>
}

export interface FormWrapperInterface {
    <WrappedComponentInterface extends FormWrapperProp>({
        WrappedComponent: WrappedComponentInterface}) : Function
}


export interface PageWrapperProp{
    WrappedComponent: FunctionComponent
}

export interface PageWrapperInterface {
    <WrappedComponentInterface extends PageWrapperProp> ({
        WrappedComponent}: WrappedComponentInterface): Function
}
