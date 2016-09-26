export const SET_METADATA = 'SET_METADATA';

export function set(metadata) {
  return {
    type: SET_METADATA,
    metadata,
  };
}
