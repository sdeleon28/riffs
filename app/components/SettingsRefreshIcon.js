import React from 'react';

const pt = React.PropTypes;


const stillClassName = 'fa fa-refresh fa-3x';
const spinningClassName = `${stillClassName} fa-spin`;

const styles = {
  container: {
    marginRight: '15px',
  },
};

class SettingsRefreshIcon extends React.Component {
  constructor() {
    super();
    this.state = {
      refreshing: false,
    };
  }

  render() {
    const { reloadMetadata, directory } = this.props;
    const { refreshing } = this.state;
    return (
      <a
        style={styles.container}
        href="javascript:void(0)"
        onClick={() => {
          this.setState({ refreshing: true });
          reloadMetadata(directory);
          setTimeout(() => this.setState({ refreshing: false }), 1000);
        }}
      >
        <i className={refreshing ? spinningClassName : stillClassName} aria-hidden="true"></i>
      </a>
    );
  }
}

SettingsRefreshIcon.propTypes = {
  reloadMetadata: pt.func.isRequired,
  directory: pt.string,
};

export default SettingsRefreshIcon;
