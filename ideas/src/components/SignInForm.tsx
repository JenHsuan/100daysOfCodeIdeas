import React, {Fragment, useEffect, useState} from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
//import { GoogleLogin } from 'react-google-login';
import GitHubLogin from 'react-github-login';
import '.././css/signinform.css'
import axios from 'axios';
import {Form, Spinner} from 'react-bootstrap';
import Router from 'next/router'

import { useDispatch, useSelector } from 'react-redux';
import {
    selectLoginState,
    selectShowPlannerState,
    selectArticlesState
} from './states/states';

import { 
    setLogin,
    setLogout,
    setAccessToken,
    setEmail,
    setUsername,
    getArticles
} from './actions/articlesAction';


const SignInForm = () => {
    const disPatch = useDispatch();
    const isLogin = useSelector(selectLoginState);
    const showPlanner = useSelector(selectShowPlannerState);
    const articles = useSelector(selectArticlesState);
    const [isLoading, setLoading] = useState(false);

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

    const [value, setValue] = useState({
        username:'',
        password:'',
        messages:''
    })

    const {username, password, messages} = value;

    const handleChange = name => e => {
      setValue({...value, [name]: e.target.value.trim()})
    }

    const passAccessToken = async (provider, access_token) => {
        console.log(access_token)
        console.log(provider)
        const res = await axios.post('/api/social-auth', {
            provider: provider,
            access_token: access_token
        });
        return res;
    }

    const responseFacebook = async response => {
        try {
            setLoading(true);
            console.log(response["accessToken"])
            console.log(response)
            const responseFromDjango = await passAccessToken('facebook', response["accessToken"]);
            console.log(responseFromDjango);
            const token = responseFromDjango["data"]["token"];
            const username = responseFromDjango["data"]["username"];
            const email = response["email"];
            SetLogin(token, email, username);
            setLoading(false);
        } catch (error) {
            //res.data = error;
            setValue({...value, ['messages']: error.message})
            console.log(error);
            disPatch(setLogout());
        }
    }

    const responseGoogle = (response) => {
        console.log(response);
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

    const ResponseGithubOnSuccess = async response => {
        try {
            setLoading(true);
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
            setLoading(false);
        } catch (error) {
            //res.data = error;
            setValue({...value, ['messages']: error.message})
            console.log(error);
            disPatch(setLogout());
        }
    }

    const ResponseGithubOnFailure = response => console.error(response);  

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(username)
        console.log(password)
        try {
            setLoading(true);
            const res = await axios.post('/api/token-auth/', {
                username: username,
                password: password
            });
            console.log(res["data"]["user"]["profile"])
            const token = res["data"]["token"];
            const email = res["data"]["user"]["profile"]["email"];
            SetLogin(token, email, username);
            setLoading(false);
        } catch (error) {
            //res.data = error;
            setValue({...value, ['messages']: error.message})
            //handleChange('messages')(error.text)
            //console.log(value);
            //disPatch(setLogout());
        }
    }

    return (
        <Fragment>
        <div className={`${showPlanner === true ? 'signinform-move-left signinform' : 'signinform'}`} >
                {isLoading === true ? (
                    <div className="signinform-grid-box">
                        <div className="signinform-spinner">
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </div>
                    </div>
                ):(
                    <div className="signinform-grid-box">
                        <div className="title">Welcome back!</div>
                        <FacebookLogin
                            cssClass="fb-btn"
                            appId="240314257268798"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} className="fb-btn">Facebook</button>
                            )}/>
                        <GitHubLogin 
                            className="github-btn"
                            clientId="51b1a8ee5b7cad1e6a85"
                            redirectUri="http://localhost:3000/signin" 
                            onSuccess={ResponseGithubOnSuccess}
                            onFailure={ResponseGithubOnFailure}
                            buttonText="Github"/>
                        <div className="split-line">Or signin by username</div>
                        <div className="signin-form">
                        <Form onSubmit = {handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Username" className="username" onChange={handleChange('username')} />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" className="password" onChange={handleChange('password')}/>
                        </Form.Group>
                        <button className="btn-submit">
                            Sign in
                        </button>
                    </Form>
                </div>
                <div className="messages">{messages}</div>
            </div>
                )}
        </div>
        </Fragment>    
    )
}

export default SignInForm
