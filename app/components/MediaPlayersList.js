import React from 'react';
import MediaPlayer from '../components/MediaPlayer';
import palette from '../styles/palette';

const pt = React.PropTypes;


const styles = {
  container: {
    flex: 1,
    padding: '1%',
    backgroundColor: palette.color3,
  },
  list: {
    paddingBottom: '20px',
  },
};

const MediaPlayersList = ({ media }) => (
  <div style={styles.container}>
    <ul style={styles.list}>
      {
        media.map(mediaMeta => (
          <MediaPlayer key={mediaMeta.title} {...mediaMeta} />
        ))
      }
    </ul>
  </div>
);

MediaPlayersList.propTypes = {
  media: pt.arrayOf(pt.shape(MediaPlayer.propTypes)).isRequired,
};

export default MediaPlayersList;
