import createBrowserHistory from 'history/createBrowserHistory';
import React from 'react';
import { Router, Route, Switch } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import SignIn from 'containers/SignIn';
import SignUp from 'containers/SignUp';

const history=createBrowserHistory();

export default () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
      </Switch>
    </App>
  </Router>
);
