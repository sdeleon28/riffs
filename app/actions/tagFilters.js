export const TOGGLE_TAG_FILTER = 'TOGGLE_TAG_FILTER';

export const toggle = filterName => ({
  type: TOGGLE_TAG_FILTER,
  filterName,
});
