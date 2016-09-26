export const SET_DIRECTORY = 'SET_DIRECTORY';

export function set(directory) {
  return {
    type: SET_DIRECTORY,
    directory,
  };
}
