import React from 'react';
import KeyFilterContainer from '../containers/KeyFilterContainer';


export const keysWithSharps = [
  'C Am',
  'G Em',
  'D Bm',
  'A F#m',
  'E C#m',
  'B G#m',
  'F# D#m',
  'C# A#m',
].map(x => x.split(' '));

export const keysWithFlats = [
  'F Dm',
  'Bb Gm',
  'Eb Cm',
  'Ab Fm',
  'Db Bbm',
  'Gb Ebm',
  'Cb Abm',
].map(x => x.split(' '));

export const keys = keysWithSharps.concat(keysWithFlats);

const styles = {
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  row: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
};

export default () => (
  <div style={styles.container}>
    <div style={styles.row}>
      {
        keysWithSharps.map(([majorKey, minorKey]) => (
          <KeyFilterContainer key={majorKey} majorKey={majorKey} minorKey={minorKey} />
        ))
      }
    </div>
    <div style={styles.row}>
      {
        keysWithFlats.map(([majorKey, minorKey]) => (
          <KeyFilterContainer key={majorKey} majorKey={majorKey} minorKey={minorKey} />
        ))
      }
    </div>
  </div>
);
