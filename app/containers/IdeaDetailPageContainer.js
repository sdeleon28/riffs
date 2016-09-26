import React from 'react';
import { connect } from 'react-redux';
import IdeaDetailPage from '../pages/IdeaDetailPage';

const mapStateToProps = ({ metadata }, { params: { dirName } }) => (metadata[dirName]);

export default connect(mapStateToProps)(IdeaDetailPage);
