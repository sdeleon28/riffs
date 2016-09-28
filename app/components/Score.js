import React from 'react';
import palette from '../styles/palette';

const pt = React.PropTypes;


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

const Score = ({ file }) => (
  <div style={styles.container}>
    { file &&
      <img
        style={styles.image}
        onClick={() => alert('Not Implemented yet')}
        src={file}></img>
    }
  </div>
);

Score.propTypes = {
  file: pt.string,
};

export default Score;
