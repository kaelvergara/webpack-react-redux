import {createStore as _createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';


import baseReducers from './reducers';

export default function createStore({history}) {
    const middleware = routerMiddleware(history);

    // https://github.com/zalmoxisus/redux-devtools-extension#2-use-with-redux
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = _createStore(
        combineReducers({
            ...baseReducers,
            router: routerReducer,
            form: formReducer
        }),
        composeEnhancers(
            applyMiddleware(middleware)
        )
    );

    return store;
}
