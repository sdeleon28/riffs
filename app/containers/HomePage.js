import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';


const mapStateToProps = ({ directory }) => ({ directory });

export default connect(mapStateToProps)(Home);
