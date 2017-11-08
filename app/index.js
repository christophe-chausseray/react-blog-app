import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
};

render(App);

// Webpack Hot Module Replacement API
if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./app', () => {
    render(App)
  })
}
