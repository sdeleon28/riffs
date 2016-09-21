import React from 'react';
import { Link } from 'react-router';

const styles = {
  counter: {
    position: 'absolute',
    top: '30%',
    left: '45%',
    fontSize: '10rem',
    fontWeight: 'bold',
    letterSpacing: '-.025em',
  }
};

export default () => (
  <div style={styles.backButton}>
    <Link to="/">
      <i className="fa fa-arrow-left fa-3x" />
    </Link>
  </div>
);
