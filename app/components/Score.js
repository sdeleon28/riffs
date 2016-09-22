import React from 'react';


const styles = {
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    opacity: 1,
    flexGrow: 1,
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
};

export default () => (
  <div style={styles.container}>
    <a href="#" style={styles.link}>
      <img
        style={styles.image}
        src=""></img>
    </a>
  </div>
);
