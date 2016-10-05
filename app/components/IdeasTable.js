import React from 'react';
import path from 'path';
import { Link } from 'react-router';
import { ipcRenderer } from 'electron';
import palette from '../styles/palette';
import MediaPlayer from '../components/MediaPlayer';

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
    padding: '1% 0',
    textAlign: 'center',
  },
};


const IdeasTable = ({ masterDirectory, metadata }) => (
  <table style={styles.table}>
    <thead style={styles.headers}>
      <tr style={styles.headersRow}>
        <td>Title</td>
        <td>Keys</td>
        <td>Tags</td>
        <td>Play</td>
      </tr>
    </thead>
    <tbody>
      {
        metadata.map(({ dirName, media, metadata: { title, keys, tags }}) => (
          <tr style={styles.row} key={dirName}>
            <td style={styles.cell}>
              <a href="javascript:void(0)" onClick={() => {
                ipcRenderer.send('open-directory', path.join(masterDirectory, dirName));
              }}>
                {title}
              </a>
            </td>
            <td style={styles.cell}>{keys.join(', ')}</td>
            <td style={styles.cell}>{tags.join(', ')}</td>
            <td style={styles.cell}>
              { media.length > 0 && media[0].file &&
                <MediaPlayer file={media[0].file} />
              }
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

IdeasTable.propTypes = {
  masterDirectory: pt.string.isRequired,
  metadata: pt.arrayOf(pt.shape({
    media: pt.arrayOf(pt.shape(MediaPlayer.propTypes)).isRequired,
    dirName: pt.string.isRequired,
    metadata: pt.shape({
      title: pt.string.isRequired,
      keys: pt.arrayOf(pt.string).isRequired,
      tags: pt.arrayOf(pt.string).isRequired,
      stars: pt.number.isRequired,
    }),
  })),
};

export default IdeasTable;
