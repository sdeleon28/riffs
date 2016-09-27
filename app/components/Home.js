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
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Keys</td>
            <td>Tags</td>
          </tr>
        </thead>
        <tbody>
          { metadata &&
            Object.keys(metadata)
              .map(x => {
                console.log(metadata[x]);
                return metadata[x];
              })
              .map(({ metadata: { title, keys, tags }}) => (
                <tr>
                  <td>{title}</td>
                  <td>{keys.join(', ')}</td>
                  <td>{tags.join(', ')}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
      <ul>
        <li>
          <Link to="/counter">to Counter</Link>
        </li>
        <li>
          <Link to="/idea-detail/riff1">to Idea Detail</Link>
        </li>
      </ul>
    </div>
  </div>
);

Home.propTypes = {
  directory: pt.string,
  metadata: pt.object,
};

export default Home;
