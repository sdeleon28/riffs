import React from 'react';
import palette from '../styles/palette';


const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3%',
    backgroundColor: palette.color3,
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    cursor: 'pointer',
  },
};

export default () => (
  <div style={styles.container}>
    <img
      style={styles.image}
      onClick={() => alert('Not Implemented yet')}
      src="file:///home/santi/tmp/riffs/guybrush.jpg"></img>
  </div>
);
