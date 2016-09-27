export const SET_DIRECTORY = 'SET_DIRECTORY';
import { saveDirectory } from '../files/config';


export const set = directory => dispatch => {
  saveDirectory(directory);
  dispatch({
    type: SET_DIRECTORY,
    directory,
  });
};
