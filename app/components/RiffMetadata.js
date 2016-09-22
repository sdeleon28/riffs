import React from 'react';
import palette from '../styles/palette';


const styles = {
  container: {
    flexGrow: 1,
    margin: '0 0 1.5% 0',
    backgroundColor: palette.color3,
  }
};

export default () => (
  <div style={styles.container}>
    <ul>
      <li>
        <p>
          <strong>Author: </strong>
          Santiago de Leon
        </p>
      </li>
      <li>
        <p>
          <strong>Keys: </strong>
          E C#m
        </p>
      </li>
      <li>
        <p>
          <strong>Tags: </strong>
        </p>
        <ul>
          <li>
            <p>standardTuning</p>
          </li>
          <li>
            <p>acoustic</p>
          </li>
          <li>
            <p>riff</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);
