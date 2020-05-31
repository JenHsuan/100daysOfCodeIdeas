import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import GitHubLogin from 'react-github-login';
import '.././css/signinform.css'
import axios from 'axios';

const SignInForm = () => {
    const passAccessToken = async (provider, access_token) => {
        const res = await axios.post('/api/social-auth/', {
            provider: provider,
            access_token: access_token
        });
        return res;
    }

    const responseFacebook = async response => {
        const res = await passAccessToken('facebook', response["accessToken"]);
        console.log(res);
    }

    const responseGoogle = (response) => {
        console.log(response);
    }


    const ResponseGithubOnSuccess = async response => {
        const res = await axios.post('api/get-github-access-token/', {
            code: response['code']
        });
        const res2 = await passAccessToken('github', res['data']);
        console.log(res2);
    }

    const ResponseGithubOnFailure = response => console.error(response);  

    return (
        <div className="signinform">
            <FacebookLogin
                cssClass="fb-btn"
                appId="240314257268798"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}/>
            <GitHubLogin 
                className="github-btn"
                clientId="51b1a8ee5b7cad1e6a85"
                redirectUri="http://localhost:3000/signin" 
                onSuccess={ResponseGithubOnSuccess}
                onFailure={ResponseGithubOnFailure}/>
        </div>
    
    )
}

export default SignInForm
