import React from 'react'
import FacebookLogin from 'react-facebook-login';
import '.././css/signinform.css'

const SignInForm = () => {


    const responseFacebook = (response) => {
        console.log(response);
      }

    return (
        <div className="signinform">
        <FacebookLogin
    appId="240314257268798"
    autoLoad={false}
    fields="name,email,picture"
    callback={responseFacebook}
    render={renderProps => (
        <button onClick={renderProps.onClick}>This is my custom FB button</button>
      )}/>
        </div>
    
    )
}

export default SignInForm
