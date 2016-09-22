import React from 'react';
import MediaPlayer from '../components/MediaPlayer';
import palette from '../styles/palette';


const styles = {
  container: {
    flex: 1,
    padding: '1%',
    backgroundColor: palette.color3,
  },
};

export default () => (
  <div style={styles.container}>
    <ul>
      <li>
        <MediaPlayer
          title="Broken English"
          file="file:///home/santi/tmp/riffs/audio/broken_english.mp3"
        />
      </li>
      <li>
        <MediaPlayer
          title="To The Core"
          file="file:///home/santi/tmp/riffs/audio/to_the_core.mp3"
        />
      </li>
      <li>
        <MediaPlayer
          title="Any Way You Want It"
          file="file:///home/santi/tmp/riffs/audio/any_way_you_want_it.mp3"
        />
      </li>
    </ul>
  </div>
);
