import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { getDirectory } from './files/config';
import gatherMetadata from './files/gatherMetadata';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

const directory = getDirectory();
const metadata = gatherMetadata(directory);
const store = configureStore({ directory, metadata });
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
