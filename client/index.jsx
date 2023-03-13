import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/styles.scss';
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './redux/store';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
