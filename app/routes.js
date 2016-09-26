import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import IdeaDetailPageContainer from './containers/IdeaDetailPageContainer';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/idea-detail/:dirName" component={IdeaDetailPageContainer} />
  </Route>
);
