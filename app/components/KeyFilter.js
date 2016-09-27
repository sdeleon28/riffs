import React from 'react';
import palette from '../styles/palette';

const pt = React.PropTypes;


const containerStyles = {
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  margin: '1em',
  backgroundColor: palette.color2,
};

const majorKeyStyles = {
  flexGrow: 1,
  borderBottom: `1px solid ${palette.color1}`,
  justifyContent: 'center',
  alignItems: 'center',
};

const styles = {
  container: {
    ...containerStyles,
  },
  containerActive: {
    ...containerStyles,
    color: palette.color2,
    backgroundColor: palette.color1,
    fontWeight: 'bold',
  },
  majorKey: {
    ...majorKeyStyles,
  },
  majorKeyActive: {
    ...majorKeyStyles,
    borderBottom: `1px solid ${palette.color2}`,
  },
  minorKey: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const KeyFilter = ({ majorKey, minorKey, toggleFilter, active }) => (
  <a
    href="javascript:void(0)"
    onClick={() => toggleFilter(majorKey)}
    style={active ? styles.containerActive : styles.container}
  >
    <div style={active ? styles.majorKeyActive : styles.majorKey}>
      <div>{majorKey}</div>
    </div>
    <div style={styles.minorKey}>
      <div>{minorKey}</div>
    </div>
  </a>
);

KeyFilter.propTypes = {
  majorKey: pt.string.isRequired,
  minorKey: pt.string.isRequired,
  toggleFilter: pt.func.isRequired,
  active: pt.bool.isRequired,
};

export default KeyFilter;
