import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Router from 'router';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
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
