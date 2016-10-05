import React from 'react';
import DirectorySelectionBar from './DirectorySelectionBar';
import IdeasTable from './IdeasTable';
import KeyFiltersList from './KeyFiltersList'
import TagFiltersListContainer from '../containers/TagFiltersListContainer';
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
    flexBasis: '25%',
  },
  tableWrapper: {
    ...box,
    margin: '1% 2% 3% 2%',
    padding: '2%',
    flexBasis: '50%',
    overflowY: 'scroll',
  },
  keyFiltersWrapper: {
    ...box,
    backgroundColor: palette.color3,
    margin: '0.5% 0.5% 0.5% 2%',
    flexBasis: '35%',
  },
  tagFiltersWrapper: {
    ...box,
    flexGrow: 1,
    backgroundColor: palette.color3,
    margin: '0.5% 2% 0.5% 0.5%',
    overflowY: 'scroll',
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
        <TagFiltersListContainer />
      </div>
    </div>
    <div style={styles.tableWrapper}>
      <IdeasTable masterDirectory={directory} metadata={metadata} />
    </div>
  </div>
);

Home.propTypes = {
  directory: pt.string,
  metadata: IdeasTable.propTypes.metadata,
};

export default Home;
