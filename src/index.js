import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './res/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ), document.getElementById('root'));

registerServiceWorker();
