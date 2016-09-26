import React from 'react';
import SettingsContainer from '../containers/SettingsContainer';

const pt = React.PropTypes;


const styles = {
  container: {
    flexGrow: 1,
    height: '60px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  directory: {
    marginLeft: '10px',
  },
};

const DirectorySelectionBar = ({ directory }) => (
  <div style={styles.container}>
    <div style={styles.currentDirectoryWrapper}>
      <strong>Current directory: </strong>
      <span style={styles.directory}>{directory}</span>
    </div>
    <SettingsContainer />
  </div>
);

DirectorySelectionBar.propTypes = {
  directory: pt.string,
};

export default DirectorySelectionBar;
