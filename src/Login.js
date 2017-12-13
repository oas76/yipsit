import React, { Component } from 'react';
import './App.css';
import fire from './fire.js';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authOk: false
    }; // <- set up react state
  }

  doLogin() {
    var fireui = require('firebaseui')
    var firebase = require('firebase')
    var ui = new fireui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        signInSuccessUrl: 'https://yipsit-80c51.firebaseapp.com',
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
    this.doLogin()
    return (
      <div id='login'>
        <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.css" />
      </div>
    );
  }
}


export default Login;
