import React, {Fragment, useState} from 'react'
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
    selectLoadingState
} from './states/states';

import FormWrapper from '../components/FormWrapper'
import PropTypes from 'prop-types'
import { 
    setErrorMessage,
    setLoading
} from './actions/articlesAction';

const SignInForm = ({responseFacebook,
    ResponseGithubOnSuccess,
    ResponseGithubOnFailure,
    SetLogin}) => {
    
    const disPatch = useDispatch();
    const showPlanner = useSelector(selectShowPlannerState);
    const errorMessage = useSelector(selectErrorMessageState);
    const isLoading = useSelector(selectLoadingState);
    
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
        console.log(username)
        console.log(password)
        try {
            disPatch(setLoading(true));
            const res = await axios.post('/api/token-auth/', {
                username: username,
                password: password
            });
            console.log(res["data"]["user"]["profile"])
            const token = res["data"]["token"];
            const email = res["data"]["user"]["profile"]["email"];
            SetLogin(token, email, username);
            disPatch(setLoading(false));
        } catch (error) {
            disPatch(setLoading(false));
            disPatch(setErrorMessage(error.message))
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
                <div className="messages">{errorMessage}</div>
            </div>
                )}
        </div>
        </Fragment>    
    )
}

SignInForm.propTypes = {
    passAccessToken: PropTypes.func.isRequired,
    responseFacebook: PropTypes.func.isRequired,
            ResponseGithubOnSuccess: PropTypes.func.isRequired,
            ResponseGithubOnFailure: PropTypes.func.isRequired,
            SetLogin: PropTypes.func.isRequired
}
export default FormWrapper(SignInForm)
