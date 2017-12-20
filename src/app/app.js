import 'babel-polyfill';
import 'styles/app.scss';

import React from 'react';
import {render} from 'react-dom';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createHashHistory';
import {Switch} from 'react-router';

import {RouteWithSubRoutes} from 'shared/route.util';
import routes from './routes';
import createStore from './store/createStore';

const history = createHistory();

render(
    <Provider store={createStore({history})}>
        <ConnectedRouter history={history}>
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
