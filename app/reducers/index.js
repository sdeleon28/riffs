import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import directory from './directory';
import metadata from './metadata';
import keyFilters from './keyFilters';
import tagFilters from './tagFilters';


const rootReducer = combineReducers({
  counter,
  directory,
  metadata,
  keyFilters,
  tagFilters,
  routing
});

export default rootReducer;
