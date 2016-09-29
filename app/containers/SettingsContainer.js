import React from 'react';
import { connect } from 'react-redux';
import { set as setDirectory } from '../actions/directory';
import { set as setMetadata } from '../actions/metadata';
import { merge as mergeTags } from '../actions/tagFilters';
import gatherMetadata from '../files/gatherMetadata'
import Settings from '../components/Settings';


const mapStateToProps = ({ directory }) => ({
  directory,
});

const mapDispatchToProps = dispatch => ({
  setDirectory: directory => dispatch(setDirectory(directory)),
  reloadMetadata: directory => {
    const metadata = gatherMetadata(directory);
    dispatch(setMetadata(metadata));
    dispatch(mergeTags(metadata));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
