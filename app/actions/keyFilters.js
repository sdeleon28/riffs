export const TOGGLE_KEY_FILTER = 'TOGGLE_KEY_FILTER';

export const toggle = filterName => ({
  type: TOGGLE_KEY_FILTER,
  filterName,
});
