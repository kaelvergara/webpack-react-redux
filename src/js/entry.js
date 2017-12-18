// homework place this on a seperate file
// homework should import all css or per component?
import 'babel-polyfill';
import 'styles/vendor/bootstrap.min.css';
import 'styles/home.scss';
import 'styles/header.scss';
import 'styles/sidebar.scss';

import React from 'react';
import {render} from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createHashHistory';

import App from './app';

import createStore from './store/createStore';

const history = createHistory();

render(
    <Provider store={createStore({history})}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
