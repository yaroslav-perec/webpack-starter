import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import './styles/main.scss';
import store from './reducers/index';

const STORE = createStore(store);

ReactDOM.render(
  (
      <Provider store={STORE}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
  ),
  document.getElementById('app'),
);
