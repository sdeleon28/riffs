export const TOGGLE_TAG_FILTER = 'TOGGLE_TAG_FILTER';
export const MERGE_TAG_FILTERS = 'MERGE_TAG_FILTERS';

export const toggle = filterName => ({
  type: TOGGLE_TAG_FILTER,
  filterName,
});

const getFilterNames = metadata => _.flatten(_.values(metadata).map(x => x.metadata.tags));

/**
 * Adds new tags, removes obsolete one and preserves states of existing ones.
 */
export const merge = metadata => {
  const filterNames = getFilterNames(metadata);
  return {
    type: MERGE_TAG_FILTERS,
    filterNames,
  }
};
