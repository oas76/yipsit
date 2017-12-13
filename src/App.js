import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login'
    }; // <- set up react state
  }

  render() {
    if (this.state.view === 'login'){
      return (
        <Login />
      );
    } else {
      return (
        <div />
      );
    }
  }
}


export default App;
