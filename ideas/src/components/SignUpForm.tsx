import React, {Fragment, useEffect, useState, FunctionComponent} from 'react'
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
    selectErrorMessageState,
    selectLoadingState
} from './states/states';

import { 
    setErrorMessage,
    setLoading,
    setBookmarks,
    setFinishedArticles,
    setUserId
} from './actions/articlesAction';
import FormWrapper from '../components/FormWrapper'
import PropTypes from 'prop-types'
import { SignInFormProp } from '../components/types'

const SignUpForm: FunctionComponent<SignInFormProp> = ({responseFacebook,
    ResponseGithubOnSuccess,
    ResponseGithubOnFailure,
    SetLogin}: SignInFormProp) => {
    const disPatch = useDispatch();
    const isLogin = useSelector(selectLoginState);
    const showPlanner = useSelector(selectShowPlannerState);
    const errorMessage = useSelector(selectErrorMessageState);
    const isLoading = useSelector(selectLoadingState);
    const [redirectUri, setRedirectUri] = useState('')

    useEffect(()=> {
        setRedirectUri(window.location.href)
    }, [])

    useEffect(()=> {
        if (isLogin) {
            Router.push(`/`)
        }
    }, [isLogin])

    const [value, setValue] = useState({
        username:'',
        email:'',
        password:''
    })

    const {username, email, password} = value;

    const handleChange = name => e => {
      setValue({...value, [name]: e.target.value.trim()})
    }
    
    const handleSubmit = async e => {
        // Check if the form is invalid
        // null or empty 
        // email format
        e.preventDefault();
        try {
            disPatch(setLoading(true));
            const createUserRes = await axios.post('/api/users/', {
                username: username,
                password: password
            });
            if (createUserRes["data"]["error"] !== undefined) {
                var err = createUserRes["data"]["error"]
                disPatch(setErrorMessage(`${Object.keys(err)[0]} : ${Object.values(err)[0]}`))
            } else  {
                const id = createUserRes["data"]["id"];
                const token = createUserRes["data"]["token"];
                const headers = {
                    'Authorization': `JWT ${token}`
                }
                const updateProfileRes = await axios.post('/api/profile/', {
                    email: email,
                    reader: id
                });
  
                var err = updateProfileRes["data"]["error"]
                if (err !== undefined) {
                    disPatch(setErrorMessage(`${Object.keys(err)[0]} : ${Object.values(err)[0]}`))
                }
                if (updateProfileRes !== undefined && updateProfileRes["data"]["email"] === email) {
                    const loginRes = await axios.post('/api/token-auth/', {
                        username: username,
                        password: password
                    });
                    SetLogin(token, email, username, "normal");
                    disPatch(setUserId(id))
                    if (updateProfileRes['error'] === undefined) {
                        const bookmarksList = updateProfileRes['data']['bookmarks'].split(',');
                        disPatch(setBookmarks(bookmarksList.filter(bookmark => bookmark !== '')))
                        localStorage.setItem("bookmarks", updateProfileRes['data']['bookmarks'].trim());
                        
                        const finishedArticlesList = updateProfileRes['data']['finishedArticles'].split(',');
                        disPatch(setFinishedArticles(finishedArticlesList.filter(finishedArticle => finishedArticle !== '')))
                        localStorage.setItem("finishedArticles", updateProfileRes['data']['finishedArticles'].trim());
                    
                    }
                }
            }
            disPatch(setLoading(false));
            
        } catch (error) {
            //res.data = error;
            disPatch(setLoading(false));
            disPatch(setErrorMessage(error.message))
            console.log(error);
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
                    <div className="title">Create Your Free Account</div>
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
                    clientId="Iv1.ca8ab67c0ba860ab"
                    redirectUri={redirectUri}
                    onSuccess={ResponseGithubOnSuccess}
                    onFailure={ResponseGithubOnFailure}
                    buttonText="Github"/>
                    <div className="split-line">
                        Or signup by email
                    </div>
                    <div className="signin-form">
                        <Form onSubmit = {handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter Username" className="username" onChange={handleChange('username')} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Enter Email" className="email" onChange={handleChange('email')}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" className="password" onChange={handleChange('password')}/>
                            </Form.Group>
                    <button className="btn-submit">
                    Get Started
                    </button>
                        </Form>
                    </div>
            <div className="messages">{errorMessage}</div>
                </div>
            )}
            </div>
        </Fragment>    
    )
}

SignUpForm.propTypes = {
    responseFacebook: PropTypes.func.isRequired,
    ResponseGithubOnSuccess: PropTypes.func.isRequired,
    ResponseGithubOnFailure: PropTypes.func.isRequired,
    SetLogin: PropTypes.func.isRequired
}

export default FormWrapper({WrappedComponent:SignUpForm})
