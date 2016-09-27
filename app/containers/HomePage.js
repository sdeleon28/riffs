import React from 'react';
import { connect } from 'react-redux';
import { keys } from '../components/KeyFiltersList';
import Home from '../components/Home';
import _ from 'lodash';


const majorKeysToMinorKeys = keys.reduce((acc, [key, value]) => ({
  ...acc,
  [key]: value,
}), {});

const getActiveKeys = keyFilters =>
  Object.keys(keyFilters)
    .map(x => keyFilters[x] ? x : null)
    .filter(x => x != null);

/**
 * Filters by selected keys using an AND logic operation.
 * Elements pass the filter only when they meet all the selected keys IN EITHER
 * the major mode or its relative minor.
 */
const filterMetadataByKeys = (metadata, keyFilters) => {
  const activeKeys = getActiveKeys(keyFilters)
  if (activeKeys.length > 0) {
    return Object.keys(metadata)
      .filter(dirName => _.every(
        activeKeys.map(x =>
          _.includes(metadata[dirName].metadata.keys, x) ||
          _.includes(metadata[dirName].metadata.keys, majorKeysToMinorKeys[x])
        )
      ))
      .reduce((acc, elem) => ({
        ...acc,
        [elem]: metadata[elem],
      }), {});
  } else {
    return metadata;
  }
};

const mapStateToProps = ({ directory, metadata, keyFilters }) => ({
  directory,
  metadata: metadata ? filterMetadataByKeys(metadata, keyFilters) : null,
});

export default connect(mapStateToProps)(Home);
