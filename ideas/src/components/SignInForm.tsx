import React, {Fragment, useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
//import { GoogleLogin } from 'react-google-login';
import GitHubLogin from 'react-github-login';
import '.././css/signinform.css'
import axios from 'axios';
import {Form, Spinner} from 'react-bootstrap';
import {
    selectShowPlannerState,
    selectErrorMessageState,
    selectLoadingState,
    selectUserIdState,
    selectLoginState
} from './states/states';

import FormWrapper from '../components/FormWrapper'
import PropTypes from 'prop-types'
import { 
    setErrorMessage,
    setLoading,
    setUserId,
    setBookmarks,
    setFinishedArticles,
    setPlanner
} from './actions/articlesAction';

const SignInForm = ({responseFacebook,
    ResponseGithubOnSuccess,
    ResponseGithubOnFailure,
    SetLogin}) => {
    
    const disPatch = useDispatch();
    const showPlanner = useSelector(selectShowPlannerState);
    const errorMessage = useSelector(selectErrorMessageState);
    const isLoading = useSelector(selectLoadingState);
    const userId = useSelector(selectUserIdState);
    const login = useSelector(selectLoginState);
    const [redirectUri, setRedirectUri] = useState('')
    

    useEffect(()=> {
        setRedirectUri(window.location.href)
    }, [])
    
    const [value, setValue] = useState({
        username:'',
        password:''
    })

    const {username, password} = value;

    const handleChange = name => e => {
      setValue({...value, [name]: e.target.value.trim()})
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            disPatch(setLoading(true));
            const res = await axios.post('/api/token-auth/', {
                username: username,
                password: password
            });
            const token = res["data"]["token"];
            const email = res["data"]["user"]["profile"]["email"];
            const id = res["data"]["user"]["id"];
            SetLogin(token, email, username, "normal");
            disPatch(setUserId(id))
            disPatch(setLoading(false));
        } catch (error) {
            disPatch(setLoading(false));
            disPatch(setErrorMessage(error.message))
        }
    }

    useEffect(()=> {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(`api/profile/?reader=${userId}`);
                if (res['error'] === undefined) {
                    const bookmarksList = res['data']['bookmarks'].split(',');
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
        
        if (login) {
            fetchProfile();
        }
    }, [userId, login])

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
                            redirectUri={redirectUri}
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
                <div className="messages">{errorMessage}</div>
            </div>
                )}
        </div>
        </Fragment>    
    )
}

SignInForm.propTypes = {
    responseFacebook: PropTypes.func.isRequired,
    ResponseGithubOnSuccess: PropTypes.func.isRequired,
    ResponseGithubOnFailure: PropTypes.func.isRequired,
    SetLogin: PropTypes.func.isRequired
}
export default FormWrapper(SignInForm)
