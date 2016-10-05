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
  audio: {
    margin: 'auto',
  },
};

const ActualMediaPlayer = ({ file }) => (
  <div style={styles.player}>
    <audio controls style={styles.audio}>
      <source src={file} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div>
);

const MediaPlayer = ({ title, file }) => {
  if (title == '') {
    return (
      <ActualMediaPlayer file={file} />
    );
  } else {
    return (
      <div style={styles.container}>
        <div>
          <strong>{title}</strong>
        </div>
        <ActualMediaPlayer file={file} />
      </div>
    );
  }
};

MediaPlayer.propTypes = {
  title: pt.string,
  file: pt.string.isRequired,
};

MediaPlayer.defaultProps = {
  title: '',
};

export default MediaPlayer;
