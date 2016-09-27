import React from 'react';
import { Link } from 'react-router';
import palette from '../styles/palette';

const pt = React.PropTypes;


const styles = {
  table: {
    width: '100%',
    textAlign: 'center',
    borderCollapse: 'collapse',
    fontSize: 'large',
  },
  headers: {
    fontWeight: 'bold',
  },
  headersRow: {
    borderBottom: `0.5em solid ${palette.color3}`,
  },
  row: {
    backgroundColor: palette.color2,
    borderTop: '0',
    borderBottom: `1em solid ${palette.color3}`,
    height: '3em',
  },
  cell: {
    padding: '2% 0',
  },
};


const IdeasTable = ({ metadata }) => (
  <table style={styles.table}>
    <thead style={styles.headers}>
      <tr style={styles.headersRow}>
        <td>Title</td>
        <td>Keys</td>
        <td>Tags</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      { metadata &&
        Object.keys(metadata)
          .map(x => metadata[x])
          .map(({ dirName, metadata: { title, keys, tags }}) => (
            <tr style={styles.row} key={dirName}>
              <td style={styles.cell}>
                <Link to={`/idea-detail/${dirName}`}>{title}</Link>
              </td>
              <td style={styles.cell}>{keys.join(', ')}</td>
              <td style={styles.cell}>{tags.join(', ')}</td>
            </tr>
          ))
      }
    </tbody>
  </table>
);

IdeasTable.propTypes = {
  metadata: pt.object,
};

export default IdeasTable;
