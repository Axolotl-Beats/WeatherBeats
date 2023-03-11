import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';

// TODO: create and import store
// TODO: create and import App

const root = createRoot(document.getElementById('app'));

root.render(
// TODO: add store to provider
  <Provider>
    <App />
  </Provider>,
);
