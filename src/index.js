import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './claim/redux/store';
import {Provider} from 'react-redux';
console.log(process);
ReactDOM.render(
    <Provider store={store()}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
