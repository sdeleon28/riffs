import React from 'react';
import palette from '../styles/palette';


const styles = {
  container: {
    flex: 1,
    margin: '1.5% 0 0 0',
    backgroundColor: palette.color3,
  },
};

export default () => (
  <div style={styles.container}>
    <ul>
      <li>Player 1</li>
      <li>Player 2</li>
      <li>Player 3</li>
    </ul>
  </div>
);
