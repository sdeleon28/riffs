import React from 'react';
import { connect } from 'react-redux';
import { set } from '../actions/directory';
import Settings from '../components/Settings';


const mapStateToProps = ({ directory }) => ({
  directory,
});

const mapDispatchToProps = dispatch => ({
  setDirectory: directory => dispatch(set(directory)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
