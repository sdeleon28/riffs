import React from 'react';
import palette from '../styles/palette';

const pt = React.PropTypes;


const containerStyle = {
  display: 'inline-block',
  backgroundColor: palette.color2,
  padding: '5px',
  borderRadius: '5px',
  marginRight: '10px',
  marginBottom: '5px',
  cursor: 'pointer',
};

const styles = {
  container: containerStyle,
  containerActive: {
    ...containerStyle,
    backgroundColor: palette.color1,
    color: palette.color2,
  },
};

const TagFilter = ({ filterName, active, toggleTagFilter }) => (
  <li
    style={active ? styles.containerActive : styles.container}
    onClick={() => toggleTagFilter(filterName)}
  >
    {filterName}
  </li>
);

export const tagPropTypes = {
  filterName: pt.string.isRequired,
  active: pt.bool,
};

TagFilter.propTypes = {
  ...tagPropTypes,
  toggleTagFilter: pt.func.isRequired,
};

export default TagFilter;
