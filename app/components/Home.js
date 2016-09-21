import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Home.css';


export default () => (
  <div>
    <div className={styles.container}>
      <h2>Home hello 4</h2>
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
