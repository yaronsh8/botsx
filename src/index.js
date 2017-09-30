import css from './static/css/globals.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store"
import App from './containers/App/App.view';
import {fetchData} from './containers/App/App.actions'

store.dispatch( fetchData() )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.main'));