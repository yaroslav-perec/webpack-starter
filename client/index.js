import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import './styles/main.scss';
import store from './reducers/index';

const STORE = createStore(store);
const RENDER_APP = Component => ReactDOM.render(
      <AppContainer>
        <Provider store={STORE}>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('app')
);

RENDER_APP(App);

if (module.hot) {
  module.hot.accept();
}
