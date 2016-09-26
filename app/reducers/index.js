import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import directory from './directory';


const rootReducer = combineReducers({
  counter,
  directory,
  routing
});

export default rootReducer;
