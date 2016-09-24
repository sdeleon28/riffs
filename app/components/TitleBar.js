import React from 'react';
import BackButton from './BackButton';

const pt = React.PropTypes;


const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    width: '93%',
  },
  invisibleBox: {
    width: 41,
  },
};

const TitleBar = ({ title }) => (
  <div style={styles.container}>
    <BackButton />
    <h1>{title}</h1>
    <div style={styles.invisibleBox}></div>
  </div>
);

TitleBar.propTypes = {
  title: pt.string.isRequired,
};

export default TitleBar;
