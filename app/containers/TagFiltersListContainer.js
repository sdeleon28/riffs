import React from 'react';
import { connect } from 'react-redux';
import TagFiltersList from '../components/TagFiltersList';
import { toggle } from '../actions/tagFilters';


const mapStateToProps = ({ tagFilters }) => ({
  tags: Object.keys(tagFilters)
    .map(filterName => ({
      filterName,
      active: tagFilters[filterName]
    }))
    .sort((a, b) => {
      if (a.filterName > b.filterName) {
        return 1;
      }
      if (a.filterName < b.filterName) {
        return -1;
      }
      return 0;
    }),
});

const mapDispatchToProps = dispatch => ({
  toggleTagFilter: filterName => dispatch(toggle(filterName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TagFiltersList);
