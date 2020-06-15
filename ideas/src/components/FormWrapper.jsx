import React, {useEffect} from 'react'
import Router from 'next/router'

import { useDispatch, useSelector } from 'react-redux';
import {
    selectLoginState,
    selectArticlesState,
    selectProviderState,
    selectEmailState
} from './states/states';

import axios from 'axios';
import { 
    setLogin,
    setLogout,
    setLoading,
    setAccessToken,
    setEmail,
    setUsername,
    setErrorMessage,
    getArticles,
    setPlanner,
    setProvider,
    setUserId,
    setBookmarks,
    setFinishedArticles
} from './actions/articlesAction';
import { useMediaPredicate } from "react-media-hook";

const FormWrapper = (WrappedComponent) => ()=> {
    const disPatch = useDispatch();
    const isLogin = useSelector(selectLoginState);
    const articles = useSelector(selectArticlesState);
    const provider = useSelector(selectProviderState);
    const email = useSelector(selectEmailState);
    //const [isLoading, setLoading] = useState(false);

    useEffect(()=> {
        if (articles.length === 0) {
            console.log('fetch articles')
            disPatch(getArticles());
        }
    }, [])

    useEffect(()=> {
        if (isLogin) {
            Router.push(`/`)
        }
    }, [isLogin])

    const passAccessToken = async (provider, access_token, email = 'none') => {
        console.log(access_token)
        console.log(provider)
        console.log(email)
        const data = {
            provider: provider,
            access_token: access_token,
            email: email
        }
        console.log(data)

        const res = await axios.post('/api/social-auth', data);
        return res;
    }

    const responseFacebook = async (response, setMessage) => {
        try {
            disPatch(setLoading(true));
            console.log(response["accessToken"])
            console.log(response)
            const email = response["email"];
            const responseFromDjango = await passAccessToken('facebook', response["accessToken"], email);
            console.log(responseFromDjango);
            const token = responseFromDjango["data"]["token"];
            const username = responseFromDjango["data"]["username"];
            const provider = responseFromDjango["data"]["provider"];
            SetLogin(token, email, username, provider);
            disPatch(setLoading(false));
            disPatch(setEmail(email));
            disPatch(setProvider(provider));
        } catch (error) {
            //res.data = error;
            //setMessage(error.message)
            //setValue({...value, ['messages']: error.message})
            disPatch(setLoading(false));
            disPatch(setErrorMessage(error.message))
            console.log(error);
            SetLogout();
        }
    }

    const SetLogout = () => {
        disPatch(setLogout());
        disPatch(setUsername(''));
        disPatch(setEmail(''));
        disPatch(setFinishedArticles([]));
        disPatch(setAccessToken(''));
        disPatch(setProvider(''));
        disPatch(setBookmarks([]));
        disPatch(setUserId(-1));
    }

    const SetLogin = (token, email, username, provider) => {
        if (email !== null && email !== undefined && email.length >0 ) {
            disPatch(setEmail(email));
            //local storage
            localStorage.setItem("email", email);
        }
        if (username !== null && username !== undefined && username.length >0 ) {
            disPatch(setUsername(username));
            //local storage
            localStorage.setItem("username", username);
        }

        if (provider !== null && provider !== undefined && provider.length >0 ) {
            disPatch(setProvider(provider));
            //local storage
            localStorage.setItem("provider", provider);
        }

        disPatch(setLogin());
        disPatch(setAccessToken(token));
        //local storage
        localStorage.setItem("login", "true");
    }

    useEffect(()=> {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(`api/profilesocial/?provider=${provider}&email=${email}`);
                if (res['error'] === undefined) {
                    console.log(res)
                    const bookmarksList = res['data']['bookmarks'].split(',');
                    console.log(bookmarksList.filter(bookmark => bookmark !== ''))
                    disPatch(setBookmarks(bookmarksList.filter(bookmark => bookmark !== '')))
                    localStorage.setItem("bookmarks", res['data']['bookmarks'].trim());
                    
                    const finishedArticlesList = res['data']['finishedArticles'].split(',');
                    disPatch(setBookmarks(finishedArticlesList.filter(finishedArticle => finishedArticle !== '')))
                    localStorage.setItem("finishedArticles", res['data']['finishedArticles'].trim());
                    
                }
            } catch(error) {
                console.log(error)
            }
        };
        
        if (isLogin) {
            fetchProfile();
        }
    }, [provider, email, isLogin])

    const ResponseGithubOnSuccess = async (response, setMessage) => {
        try {
            disPatch(setLoading(true));
            const responseFromGithub = await axios.post('/api/get-github-access-token', {
                code: response['code']
            });
            console.log(response);
            
            const responseFromDjango = await passAccessToken('github', responseFromGithub['data']);
            console.log(responseFromDjango);
            const token = responseFromDjango["data"]["token"];
            const email = responseFromDjango["data"]["email"];
            const provider = responseFromDjango["data"]["provider"];
            const username = responseFromDjango["data"]["username"];
            SetLogin(token, email, username, provider);
            disPatch(setLoading(false));
            disPatch(setEmail(email));
            disPatch(setProvider(provider));
        } catch (error) {
            //res.data = error;
            //setValue({...value, ['messages']: error.message})
            disPatch(setLoading(false));
            disPatch(setErrorMessage(error.message))
            console.log(error);
            SetLogout();
        }
    }

    const ResponseGithubOnFailure = response => console.error(response);  

    return (
        <WrappedComponent passAccessToken = {passAccessToken}
            responseFacebook = {responseFacebook}
            ResponseGithubOnSuccess = {ResponseGithubOnSuccess}
            ResponseGithubOnFailure = {ResponseGithubOnFailure}
            SetLogin = {SetLogin}/>
    )
}

export default FormWrapper
