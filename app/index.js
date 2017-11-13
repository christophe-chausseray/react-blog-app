import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Router from 'router';
import store from 'store';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
};

render(Router);

// Webpack Hot Module Replacement API
if (process.env.NODE_ENV === 'development') {
  module.hot.accept('router', () => {
    render(Router)
  })
}
