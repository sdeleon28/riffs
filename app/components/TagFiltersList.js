import React from 'react';
import TagFilter, { tagPropTypes } from './TagFilter';

const pt = React.PropTypes;


const styles = {
  tagList: {
    padding: 0,
  },
};

const TagFiltersList = ({ tags, toggleTagFilter }) => (
  <ul style={styles.tagList}>
    {
      tags.map(tag => (
        <TagFilter
          key={tag.filterName}
          toggleTagFilter={toggleTagFilter}
          {...tag}
        />)
      )
    }
  </ul>
);

TagFiltersList.propTypes = {
  tags: pt.arrayOf(pt.shape(tagPropTypes)),
  toggleTagFilter: pt.func.isRequired,
};

export default TagFiltersList;
