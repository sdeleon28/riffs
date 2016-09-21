import React from 'react';
import TitleBar from '../components/TitleBar';

const pt = React.PropTypes;


const styles = {
  container: {
    display: 'flex',
  },
  columnsWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  rightColumn: {
    flex: 1,
    flexDirection: 'column',
  },
}

const IdeaDetailPage = () => (
  <div style={styles.container}>
    <TitleBar />
    <div style={styles.columnsWrapper}>
      <div style={styles.leftColumn}>
        <div style={styles.metadata}>Content</div>
        <div style={styles.metadata}>Content</div>
      </div>
      <div style={styles.rightColumn}>
        <img src="" alt="Score"/>
      </div>
    </div>
  </div>
);

// IdeaDetail.propTypes = {
//   scoreUri: pt.string.isRequired,
// };

export default IdeaDetailPage;
