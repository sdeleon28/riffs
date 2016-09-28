import React from 'react';
import palette from '../styles/palette';

const pt = React.PropTypes;


const styles = {
  container: {
    display: 'inline-block',
    backgroundColor: palette.color2,
    padding: '5px',
    borderRadius: '5px',
    marginRight: '10px',
    marginBottom: '5px',
  },
};

const Tag = ({ children }) => (
  <li
    style={styles.container}
    onClick={() => onClick(children)}
  >
    {children}
  </li>
);

Tag.propTypes = {
  children: pt.string.isRequired,
};

export default Tag;
