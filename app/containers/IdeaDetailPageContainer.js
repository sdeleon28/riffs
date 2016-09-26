import React from 'react';
import { connect } from 'react-redux';
import IdeaDetailPage from '../pages/IdeaDetailPage';

const mapStateToProps = ({ metadata }) => ({
  metadata: metadata[0].metadata,
  media: metadata[0].media,
  score: metadata[0].score,
  title: metadata[0].title,
});

// export default () => (
//   <IdeaDetailPage
//     metadata={{
//       author: "Santiago de Lion",
//       keys: ['E', 'C#m'],
//       tags: ['standardTuning', 'acoustic', 'riff'],
//     }}
//     media={[
//       {
//         title: 'Broken English',
//         file: 'file:///home/santi/tmp/riffs/audio/broken_english.mp3',
//       },
//       {
//         title: 'To The Core',
//         file: 'file:///home/santi/tmp/riffs/audio/to_the_core.mp3',
//       },
//       {
//         title: 'Any Way You Want It',
//         file: 'file:///home/santi/tmp/riffs/audio/any_way_you_want_it.mp3',
//       },
//     ]}
//     score="file:///home/santi/tmp/riffs/guybrush.jpg"
//     title="Bouree in E minor"
//   />
// );

export default connect(mapStateToProps)(IdeaDetailPage);
