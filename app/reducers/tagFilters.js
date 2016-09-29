import { MERGE_TAG_FILTERS, TOGGLE_TAG_FILTER } from '../actions/tagFilters';


export default (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_TAG_FILTER:
      return {
        ...state,
        [action.filterName]: !state[action.filterName],
      };
    case MERGE_TAG_FILTERS:
      return _.fromPairs(
        action.filterNames.map(filterName => {
          if (_.includes(Object.keys(state), filterName)) {
            return [filterName, state[filterName]];
          } else {
            return [filterName, false];
          }
        }));
    default:
      return state;
  }
};
