import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './Login'
import SignedIn from './SignedIn'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route exact path='/user' component={SignedIn}/>
        </Switch>
    </main>
)

export default Main