import React from 'react';
import SettingsRefreshIcon from './SettingsRefreshIcon';

const pt = React.PropTypes;
const { dialog } = require('electron').remote;


const Settings = ({ setDirectory, reloadMetadata, directory }) => (
  <div>
    <SettingsRefreshIcon reloadMetadata={reloadMetadata} directory={directory} />
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
  directory: pt.string,
};

export default Settings;
