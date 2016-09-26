import React from 'react';
import { Link } from 'react-router';
import styles from './Home.css';
import DirectorySelectionBar from './DirectorySelectionBar';
const pt = React.PropTypes;


const inlineStyles = {
  container: {
    flexGrow: 1,
  },
  topBarWrapper: {
    flexGrow: 1,
    margin: '0 2%',
  },
};

const Home = ({ directory, metadata }) => (
  <div style={inlineStyles.container}>
    <div style={inlineStyles.topBarWrapper}>
      <DirectorySelectionBar directory={directory} />
    </div>
    <div className={styles.container}>
      <h2>Home</h2>
      <ul>
        <li>
          <Link to="/counter">to Counter</Link>
        </li>
        <li>
          <Link to="/idea-detail">to Idea Detail</Link>
        </li>
      </ul>
    </div>
  </div>
);

Home.propTypes = {
  directory: pt.string,
  metadata: pt.array,
};

export default Home;
