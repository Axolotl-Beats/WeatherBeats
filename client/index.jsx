import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

require('./css/styles.scss');

const root = createRoot(document.getElementById('app'));

root.render(
// TODO: add store to provider
  // <Provider store={store}>
  <App />,
  // </Provider>,
);
