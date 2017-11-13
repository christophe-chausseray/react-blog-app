import {applyMiddleware, createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import articleList from './../modules/articleList/reducers';

const reducers = combineReducers({
  articleList,
  form: formReducer
});

const middlewares = applyMiddleware(promiseMiddleware(), thunk, logger);

const store = createStore(reducers, middlewares);

export default store;
