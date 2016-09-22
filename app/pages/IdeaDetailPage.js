import React from 'react';
import TitleBar from '../components/TitleBar';
import Score from '../components/Score';
import RiffMetadata from '../components/RiffMetadata';

const pt = React.PropTypes;


const styles = {
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '100%',
  },
  columnsWrapper: {
    flexGrow: 1,
    flexBasis: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '0 auto 3%',
  },
  leftColumn: {
    flexGrow: 1,
    flexBasis: 0,
    flexDirection: 'column',
    border: '1px solid white',
  },
  rightColumn: {
    flexGrow: 1,
    flexBasis: 0,
    flexDirection: 'column',
    padding: '3%',
    border: '1px solid white',
  },
  scoreContainer: {
    flexGrow: 1,
    flexBasis: 0,
  },
  metadata: {
    flexGrow: 2,
    margin: '3% 3% 1.5% 3%',
    backgroundColor: 'red',
  },
  players: {
    flexGrow: 3,
    margin: '1.5% 3% 3% 3%',
    backgroundColor: 'blue',
  },
};

const IdeaDetailPage = () => (
  <div style={styles.container}>
    <TitleBar />
    <div style={styles.columnsWrapper}>
      <div style={styles.leftColumn}>
        <div style={styles.metadata}>
          <RiffMetadata />
        </div>
        <div style={styles.players}>Content</div>
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
