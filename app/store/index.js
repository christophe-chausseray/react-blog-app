import {applyMiddleware, createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import articleList from './../modules/articleList/reducers';
import auth from './../modules/auth/reducers';
import { localStorageMiddleware } from './../middlewares';

const reducers = combineReducers({
  articleList,
  auth,
  form: formReducer
});

const middlewares = applyMiddleware(promiseMiddleware(), thunk, logger, localStorageMiddleware);

const store = createStore(reducers, middlewares);

export default store;
