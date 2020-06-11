import React, {useEffect} from 'react'
import Router from 'next/router'

import { useDispatch, useSelector } from 'react-redux';
import {
    selectLoginState,
    selectArticlesState
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
    getArticles
} from './actions/articlesAction';
import { useMediaPredicate } from "react-media-hook";

const FormWrapper = (WrappedComponent) => ()=> {
    const disPatch = useDispatch();
    const isLogin = useSelector(selectLoginState);
    const articles = useSelector(selectArticlesState);
    const biggerThan400 = useMediaPredicate("(min-width: 400px)");
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

    const passAccessToken = async (provider, access_token) => {
        console.log(access_token)
        console.log(provider)
        const res = await axios.post('/api/social-auth', {
            provider: provider,
            access_token: access_token
        });
        return res;
    }

    const responseFacebook = async (response, setMessage) => {
        try {
            disPatch(setLoading(true));
            console.log(response["accessToken"])
            console.log(response)
            const responseFromDjango = await passAccessToken('facebook', response["accessToken"]);
            console.log(responseFromDjango);
            const token = responseFromDjango["data"]["token"];
            const username = responseFromDjango["data"]["username"];
            const email = response["email"];
            SetLogin(token, email, username);
            disPatch(setLoading(false));
        } catch (error) {
            //res.data = error;
            //setMessage(error.message)
            //setValue({...value, ['messages']: error.message})
            disPatch(setLoading(false));
            disPatch(setErrorMessage(error.message))
            console.log(error);
            disPatch(setLogout());
        }
    }

    const SetLogin = (token, email, username) => {
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

        disPatch(setLogin());
        disPatch(setAccessToken(token));
        //local storage
        localStorage.setItem("login", "true");
    }

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
            const username = responseFromDjango["data"]["username"];
            SetLogin(token, email, username);
            disPatch(setLoading(false));
        } catch (error) {
            //res.data = error;
            //setValue({...value, ['messages']: error.message})
            disPatch(setLoading(false));
            disPatch(setErrorMessage(error.message))
            console.log(error);
            disPatch(setLogout());
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
