import React from 'react';
import Tag from './Tag';
import palette from '../styles/palette';


const styles = {
  container: {
    flexGrow: 1,
    margin: '0 0 1.5% 0',
    backgroundColor: palette.color3,
    overflowY: 'auto',
  },
  list: {
    paddingBottom: '20px',
  },
  text: {
    fontSize: '16px',
  },
  tagList: {
    padding: 0,
  },
};

const goToKey = key => alert(`Should navigate to key: ${key}`);
const goToTag = tag => alert(`Should navigate to tag: ${tag}`);

export default () => (
  <div style={styles.container}>
    <ul style={styles.list}>
      <li>
        <p style={styles.text}>
          <strong>Author: </strong>
          <span>Santiago de Leon</span>
        </p>
      </li>
      <li>
        <p style={styles.text}>
          <strong>Keys: </strong>
        </p>
        <ul style={styles.tagList}>
          <Tag onClick={goToKey}>E</Tag>
          <Tag onClick={goToKey}>C#m</Tag>
        </ul>
      </li>
      <li>
        <p style={styles.text}>
          <strong>Tags: </strong>
        </p>
        <ul style={styles.tagList}>
          <Tag onClick={goToTag}>standardTuning</Tag>
          <Tag onClick={goToTag}>acoustic</Tag>
          <Tag onClick={goToTag}>riff</Tag>
        </ul>
      </li>
    </ul>
  </div>
);
