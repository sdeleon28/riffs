import { SET_METADATA } from '../actions/metadata';

export default (state = null, action) => {
  switch (action.type) {
    case SET_METADATA:
      return action.metadata;
    default:
      return state;
  }
};
