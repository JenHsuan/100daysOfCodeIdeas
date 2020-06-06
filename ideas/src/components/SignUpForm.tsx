import React, {Fragment, useEffect, useState} from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
//import { GoogleLogin } from 'react-google-login';
import GitHubLogin from 'react-github-login';
import '.././css/signinform.css'
import axios from 'axios';
import {Form} from 'react-bootstrap';
import Router from 'next/router'

import { useDispatch, useSelector } from 'react-redux';
import {
    selectLoginState
} from './states/states';

import { 
    setLogin,
    setLogout,
    setAccessToken,
    setEmail,
    setUsername
} from './actions/articlesAction';

const SignUpForm = () => {
    const disPatch = useDispatch();
    const isLogin = useSelector(selectLoginState);

    useEffect(()=> {
        if (isLogin) {
            Router.push(`/`)
        }
    }, [isLogin])

    const [value, setValue] = useState({
        username:'',
        email:'',
        password:'',
        messages:''
    })

    const {username, email, password, messages} = value;

    const handleChange = name => e => {
      setValue({...value, [name]: e.target.value.trim()})
    }

    const passAccessToken = async (provider, access_token) => {
        const res = await axios.post('/api/social-auth', {
            provider: provider,
            access_token: access_token
        });
        return res;
    }

    const createUser = async (username, password) => {
        const res = await axios.post('/api/users', {
            username: username,
            password: password
        });
        return res;
    }

    const responseFacebook = async response => {
        try {
            const responseFromDjango = await passAccessToken('facebook', response["accessToken"]);
            console.log(responseFromDjango);
            const token = responseFromDjango["data"]["token"];
            const username = responseFromDjango["data"]["username"];
            const email = response["email"];
            SetLogin(token, email, username);
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
        if (token !== null && token !== undefined && token.length >0 ) {
            disPatch(setLogin());
            disPatch(setAccessToken(token));

            //local storage
            localStorage.setItem("login", "true");
            localStorage.setItem("token", token);

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
        }
    }

    const ResponseGithubOnSuccess = async response => {
        try {
            const responseFromGithub = await axios.post('/api/get-github-access-token', {
                code: response['code']
            });
            console.log(responseFromGithub['data']);
            
            const responseFromDjango = await passAccessToken('github', responseFromGithub['data']);
            console.log(responseFromDjango);
            const token = responseFromDjango["data"]["token"];
            const email = responseFromDjango["data"]["email"];
            const username = responseFromDjango["data"]["username"];
            SetLogin(token, email, username);
        } catch (error) {
            //res.data = error;
            console.log(error);
            setValue({...value, ['messages']: error.message})
            disPatch(setLogout());
        }
    }

    const ResponseGithubOnFailure = response => console.error(response);  

    const handleSubmit = async e => {
        // Check if the form is invalid
        // null or empty 
        // email format
        e.preventDefault();
        try {
            const createUserRes = await axios.post('/api/users/', {
                username: username,
                password: password
            });
            if (createUserRes["data"]["error"] !== undefined) {
                var err = createUserRes["data"]["error"]
                setValue({...value, 
                    ['messages']: `${Object.keys(err)[0]} : ${Object.values(err)[0]}`})
            } else  {
                const id = createUserRes["data"]["id"];
                const token = createUserRes["data"]["token"];
                const headers = {
                    Authorization: `JWT ${token}`
                }
                const updateProfileRes = await axios.post('/api/profile/', {
                    email: email,
                    reader: id
                },{
                    headers: headers
                });
                
                console.log(updateProfileRes)
                var err = updateProfileRes["data"]["error"]
                if (err !== undefined) {
                    setValue({...value, 
                        ['messages']: `${Object.keys(err)[0]} : ${Object.values(err)[0]}`})
                }
                if (updateProfileRes !== undefined && updateProfileRes["data"]["email"] === email) {
                    SetLogin(token, email, username);
                }
            }
            
        } catch (error) {
            //res.data = error;
            setValue({...value, ['messages']: error.message})
            console.log(error);
        }
    }

    return (
        <Fragment>
        <div className="signinform">
            <div className="grid-box">
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
                clientId="51b1a8ee5b7cad1e6a85"
                redirectUri="http://localhost:3000/signin" 
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
            </div>
        </div>
        <div className="messages">{messages}</div>
        </Fragment>    
    )
}

export default SignUpForm
