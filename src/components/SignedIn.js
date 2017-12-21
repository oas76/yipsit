import React, { Component } from 'react';
import '../res/App.css';
import fire from '../fire'

class SignedIn extends Component {
    const user_data = null

    initApp() {
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                let displayName = user.displayName;
                let email = user.email;
                let emailVerified = user.emailVerified;
                let photoURL = user.photoURL;
                let uid = user.uid;
                let phoneNumber = user.phoneNumber;
                let providerData = user.providerData;
                user.getIdToken().then(function(accessToken) {
                        user_data = JSON.stringify({
                        displayName: displayName,
                        email: email,
                        emailVerified: emailVerified,
                        phoneNumber: phoneNumber,
                        photoURL: photoURL,
                        uid: uid,
                        accessToken: accessToken,
                        providerData: providerData
                    }, null, '  ');
                });
            }
        }, function(error) {
            console.log(error);
        });
    };

    render() {
        let success = ' IT WAS GREAT SUCCESS ';
        return (
            <div id='login'>
                <link type="text/css" rel="stylesheet"
                      href="https://cdn.firebase.com/libs/firebaseui/2.5.1/firebaseui.css"/>
                {success}
                {this.user_data}
            </div>
        );
    }
}



export default SignedIn;