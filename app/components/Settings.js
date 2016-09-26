import React from 'react';

const pt = React.PropTypes;
const { dialog } = require('electron').remote;


const Settings = ({ setDirectory, reloadMetadata }) => (
  <div>
    <a
      href="#"
      onClick={() => dialog.showOpenDialog(
        { properties: ['openDirectory'] },
        paths => {
          if (paths) {
            const path = paths[0];
            setDirectory(path);
            reloadMetadata(path);
          }
        }
      )}
    >
      <i className="fa fa-cog fa-3x" aria-hidden="true"></i>
    </a>
  </div>
);

Settings.propTypes = {
  setDirectory: pt.func.isRequired,
  reloadMetadata: pt.func.isRequired,
};

export default Settings;
