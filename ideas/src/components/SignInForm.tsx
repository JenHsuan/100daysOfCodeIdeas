import React, {Fragment} from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
//import { GoogleLogin } from 'react-google-login';
import GitHubLogin from 'react-github-login';
import '.././css/signinform.css'
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import {
    selectLoginState,
    selectAccessTokenState,
    selectEmailState
} from './reducers/articlesReducer';

import { 
    setLogin,
    setLogout,
    setAccessToken,
    setEmail
} from './actions/articlesAction';


const SignInForm = () => {
    const disPatch = useDispatch();

    const passAccessToken = async (provider, access_token) => {
        const res = await axios.post('/api/social-auth/', {
            provider: provider,
            access_token: access_token
        });
        return res;
    }

    const responseFacebook = async response => {
        try {
            console.log(response["accessToken"])
            console.log(response)
            disPatch(setEmail(response["email"]));
            const responseFromDjango = await passAccessToken('facebook', response["accessToken"]);
            console.log(responseFromDjango);
            disPatch(setLogin());
            disPatch(setAccessToken(responseFromDjango["data"]["token"]));
        } catch (error) {
            //res.data = error;
            console.log(error);
            disPatch(setLogout());
        }
    }

    const responseGoogle = (response) => {
        console.log(response);
    }


    const ResponseGithubOnSuccess = async response => {
        try {
            const responseFromGithub = await axios.post('api/get-github-access-token/', {
                code: response['code']
            });
            console.log(responseFromGithub['data']);
            
            const responseFromDjango = await passAccessToken('github', responseFromGithub['data']);
            console.log(responseFromDjango);
            disPatch(setLogin());
            disPatch(setAccessToken(responseFromDjango["data"]["token"]));
            disPatch(setEmail(responseFromDjango["data"]["email"]));
        } catch (error) {
            //res.data = error;
            console.log(error);
            disPatch(setLogout());
        }
    }

    const ResponseGithubOnFailure = response => console.error(response);  

    return (
        <Fragment>
        <div className="signinform">
            <div className="grid-box">
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
                <div className="split-line">
                    or signin by email
                </div>
                <div className="signin-form">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" className="email"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" className="password"/>
                        </Form.Group>
                    </Form>
                </div>
                <button className="btn-submit">
                Get started
                </button>
            </div>
        </div>
        </Fragment>    
    )
}

export default SignInForm
