import React, { Component } from 'react';
import '../res/App.css';
import fire from '../fire'


class Login extends Component {

  doLogin() {
    let fireui = require('firebaseui')
    let firebase = require('firebase')
    let ui = new fireui.auth.AuthUI(fire.auth());
    let uiConfig = {
        signInSuccessUrl: 'https://yipsit-80c51.firebaseapp.com/user',
        signInOptions: [
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };

    ui.start('#login',uiConfig)
  }

  render() {
      this.doLogin();
      return (
      <div id='login'>
        <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.css" />
      </div>
    );
  }
}


export default Login;
