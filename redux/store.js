import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import {  routerMiddleware, routerReducer } from 'react-router-redux';

import reducers from './reducers';

export const history = createHistory()

const comReducers = combineReducers({
  reducers,
  routing: routerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(comReducers, 
  composeEnhancers(applyMiddleware(routerMiddleware(history)))
);
