import createBrowserHistory from 'history/createBrowserHistory';
import React from 'react';
import { Router, Route, Switch } from 'react-router';
import App from 'containers/App';
import ArticleList from 'modules/articles/containers/ArticleListContainer';
import ArticleEditor from 'modules/articles/containers/ArticleEditorContainer';
import Article from 'modules/articles/containers/ArticleContainer';
import SignIn from 'modules/auth/containers/SignInContainer';
import SignUp from 'modules/auth/containers/SignUpContainer';

const history=createBrowserHistory();

export default () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={ArticleList} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route exact path="/editor" component={ArticleEditor} />
        <Route path="/editor/:slug" component={ArticleEditor} />
        <Route path="/articles/:slug" component={Article} />
      </Switch>
    </App>
  </Router>
);
