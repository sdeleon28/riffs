import React from 'react';
import BackButton from './BackButton';


const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto 3%',
  },
  invisibleBox: {
    width: 41,
  },
};

export default () => (
  <div style={styles.container}>
    <BackButton />
    <h1>Song 2</h1>
    <div style={styles.invisibleBox}></div>
  </div>
);
