import { TOGGLE_TAG_FILTER } from '../actions/tagFilters';


export default (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_TAG_FILTER:
      return {
        ...state,
        [action.filterName]: !state[action.filterName],
      };
    default:
      return state;
  }
};
