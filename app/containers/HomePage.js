import React from 'react';
import { connect } from 'react-redux';
import { keys } from '../components/KeyFiltersList';
import Home from '../components/Home';
import _ from 'lodash';


const majorKeysToMinorKeys = _.fromPairs(keys);

const getActiveFilters = filters =>
  Object.keys(filters)
    .map(x => filters[x] ? x : null)
    .filter(x => x != null);

/**
 * Filters by selected keys using an AND logic operation.
 * Elements pass the filter only when they meet all the selected keys IN EITHER
 * the major mode or its relative minor.
 */
const filterMetadataByKeysAndTags = (metadata, keyFilters, tagFilters) => {
  const activeKeys = getActiveFilters(keyFilters);
  const activeTags = getActiveFilters(tagFilters);

  if (activeKeys.length == 0 && activeTags.length == 0) {
    return metadata;
  }

  let dirNamesFilteredByKeys = Object.keys(metadata);
  if (activeKeys.length > 0) {
    dirNamesFilteredByKeys = Object.keys(metadata)
      .filter(dirName => _.every(
        activeKeys.map(x =>
          _.includes(metadata[dirName].metadata.keys, x) ||
          _.includes(metadata[dirName].metadata.keys, majorKeysToMinorKeys[x])
        )
      ));
  }
  let dirNamesFilteredByKeysAndTags = [...dirNamesFilteredByKeys];
  if (activeTags.length > 0) {
    dirNamesFilteredByKeysAndTags = dirNamesFilteredByKeys
      .filter(dirName => _.every(
        activeTags.map(x => _.includes(metadata[dirName].metadata.tags, x))
      ));
  }
  return _.fromPairs(dirNamesFilteredByKeysAndTags.map(x => [x, metadata[x]]));
};

const mapStateToProps = ({ directory, metadata, keyFilters, tagFilters }) => ({
  directory,
  metadata: metadata ? filterMetadataByKeysAndTags(metadata, keyFilters, tagFilters) : null,
});

export default connect(mapStateToProps)(Home);
