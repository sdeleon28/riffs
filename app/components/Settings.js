import React from 'react';

const pt = React.PropTypes;
const { dialog } = require('electron').remote;


const Settings = ({ setDirectory }) => (
  <div>
    <a
      href="#"
      onClick={() => dialog.showOpenDialog(
        { properties: ['openDirectory'] },
        paths => {
          if (paths) {
            setDirectory(paths[0]);
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
};

export default Settings;
