import createBrowserHistory from 'history/createBrowserHistory';
import React from 'react';
import { Router, Route, Switch } from 'react-router';
import App from 'containers/App';
import ArticleList from 'modules/articleList/containers/ArticleListContainer';
import SignIn from 'modules/signIn';
import SignUp from 'modules/signUp';

const history=createBrowserHistory();

export default () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={ArticleList} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
      </Switch>
    </App>
  </Router>
);
