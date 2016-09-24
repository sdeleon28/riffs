import React from 'react';
import Tag from './Tag';
import palette from '../styles/palette';

const pt = React.PropTypes;


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

const RiffMetadata = ({ author, keys, tags }) => (
  <div style={styles.container}>
    <ul style={styles.list}>
      <li>
        <p style={styles.text}>
          <strong>Author: </strong>
          <span>{author}</span>
        </p>
      </li>
      <li>
        <p style={styles.text}>
          <strong>Keys: </strong>
        </p>
        <ul style={styles.tagList}>
          {
            keys.map(key => <Tag onClick={goToKey} key={key}>{key}</Tag>)
          }
        </ul>
      </li>
      <li>
        <p style={styles.text}>
          <strong>Tags: </strong>
        </p>
        <ul style={styles.tagList}>
          {
            tags.map(tag => <Tag onClick={goToTag} key={tag}>{tag}</Tag>)
          }
        </ul>
      </li>
    </ul>
  </div>
);

RiffMetadata.propTypes = {
  author: pt.string.isRequired,
  keys: pt.arrayOf(pt.string).isRequired,
  tags: pt.arrayOf(pt.string).isRequired,
};

export default RiffMetadata;
