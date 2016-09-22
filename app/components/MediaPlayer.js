import React from 'react';

const pt = React.PropTypes;


const styles = {
  container: {
    flexDirection: 'column',
    marginBottom: '20px',
  },
  player: {
    marginTop: '10px',
  },
};

const MediaPlayer = ({ title, file }) => (
  <div style={styles.container}>
    <div>
      <strong>{title}</strong>
    </div>
    <div style={styles.player}>
      <audio controls>
        <source src={file} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
);

MediaPlayer.propTypes = {
  title: pt.string.isRequired,
  file: pt.string.isRequired,
};

export default MediaPlayer;
