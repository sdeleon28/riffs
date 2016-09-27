import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { keys } from './components/KeyFiltersList';
import { getDirectory } from './files/config';
import gatherMetadata from './files/gatherMetadata';
import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';


const keyFilters = keys
  .map(x => x[0])
  .reduce((acc, elem) => ({
    ...acc,
    [elem]: false,
  }), {});
const directory = getDirectory();
const metadata = gatherMetadata(directory);
const store = configureStore({ directory, metadata, keyFilters });
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
