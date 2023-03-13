import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';

require('./css/styles.scss');

const root = createRoot(document.getElementById('app'));

root.render(
// TODO: add store to provider
  <Provider store={store}>
    <App />
  </Provider>,
);
