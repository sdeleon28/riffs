import React from 'react';
import DirectorySelectionBar from './DirectorySelectionBar';
import IdeasTable from './IdeasTable';
import KeyFiltersList from './KeyFiltersList'
import palette from '../styles/palette';

const pt = React.PropTypes;


const box = {
  margin: '1% 2%',
  backgroundColor: palette.color3,
  padding: '0 2%',
};

const styles = {
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  topBarWrapper: {
    ...box,
  },
  filtersWrapper: {
    flexGrow: 2,
  },
  tableWrapper: {
    ...box,
    margin: '1% 2% 3% 2%',
    padding: '2%',
    flexGrow: 6,
  },
  keyFiltersWrapper: {
    ...box,
    flexGrow: 1,
    backgroundColor: palette.color3,
    margin: '2% 1% 2% 2%',
  },
  tagFiltersWrapper: {
    ...box,
    flexGrow: 2,
    backgroundColor: palette.color3,
    margin: '2% 2% 2% 1%',
  },
};

const Home = ({ directory, metadata }) => (
  <div style={styles.container}>
    <div style={styles.topBarWrapper}>
      <DirectorySelectionBar directory={directory} />
    </div>
    <div style={styles.filtersWrapper}>
      <div style={styles.keyFiltersWrapper}>
        <KeyFiltersList />
      </div>
      <div style={styles.tagFiltersWrapper}>
      </div>
    </div>
    <div style={styles.tableWrapper}>
      <IdeasTable metadata={metadata} />
    </div>
  </div>
);

Home.propTypes = {
  directory: pt.string,
  metadata: pt.object,
};

export default Home;
