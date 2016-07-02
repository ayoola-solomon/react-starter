import React                from 'react';
import { render }           from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider }         from 'react-redux';
import * as reducers        from 'reducers';
import routes               from 'routes';
import promiseMiddleware    from 'lib/promiseMiddleware';
import { createStore,
         combineReducers,
         applyMiddleware }  from 'redux';
import withScroll from 'scroll-behavior';

const initialState = window.__INITIAL_STATE__;

const history = withScroll(browserHistory);

const reducer = combineReducers(reducers);
const store   = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState);
require('../static/styles/app.less');

render(
  <Provider store={store}>
    <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('react-view')
);
