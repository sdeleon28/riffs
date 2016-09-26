import { SET_DIRECTORY } from '../actions/directory';

export default function counter(state = null, action) {
  switch (action.type) {
    case SET_DIRECTORY:
      return action.directory;
    default:
      return state;
  }
}
