import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './claim/redux/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'antd/dist/antd.min.css';
import './index.less';
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter keyLength={12}>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
