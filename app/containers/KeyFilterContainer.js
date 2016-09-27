import React from 'react';
import { connect } from 'react-redux';
import { toggle } from '../actions/keyFilters';
import KeyFilter from '../components/KeyFilter';


const mapStateToProps = ({ keyFilters }, { majorKey }) => ({
  active: keyFilters[majorKey],
});

const mapDispatchToProps = dispatch => ({
  toggleFilter: filter => dispatch(toggle(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(KeyFilter);
