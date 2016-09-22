import React from 'react';
import TitleBar from '../components/TitleBar';
import Score from '../components/Score';
import RiffMetadata from '../components/RiffMetadata';
import MediaPlayersList from '../components/MediaPlayersList';
import palette from '../styles/palette';

const pt = React.PropTypes;


const styles = {
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  columnsWrapper: {
    flexGrow: 1,
    flexBasis: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '0 auto 3%',
    width: '97%',
  },
  leftColumn: {
    flexGrow: 1,
    flexBasis: 0,
    flexDirection: 'column',
    margin: '0 1% 0 1%',
  },
  rightColumn: {
    flexGrow: 1,
    flexBasis: 0,
    flexDirection: 'column',
    margin: '0 1% 0 1%',
  },
  scoreContainer: {
    flexGrow: 1,
    flexBasis: 0,
  },
  metadataWrapper: {
    flowDirection: 'row',
    margin: '0 0 1% 0',
  },
  playersWrapper: {
    flexGrow: 1,
    flowDirection: 'row',
    margin: '1% 0 0 0',
  },
};

const IdeaDetailPage = () => (
  <div style={styles.container}>
    <TitleBar />
    <div style={styles.columnsWrapper}>
      <div style={styles.leftColumn}>
        <div style={styles.metadataWrapper}>
          <RiffMetadata />
        </div>
        <div style={styles.playersWrapper}>
          <MediaPlayersList />
        </div>
      </div>
      <div style={styles.rightColumn}>
        <div style={styles.scoreContainer}>
          <Score />
        </div>
      </div>
    </div>
  </div>
);

// IdeaDetail.propTypes = {
//   scoreUri: pt.string.isRequired,
// };

export default IdeaDetailPage;
