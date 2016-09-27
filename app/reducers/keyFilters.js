import { TOGGLE_KEY_FILTER } from '../actions/keyFilters';


export default (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_KEY_FILTER:
      return {
        ...state,
        [action.filterName]: !state[action.filterName],
      };
    default:
      return state;
  }
};
