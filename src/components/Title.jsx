import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <main>
        <h2>{headline}</h2>
      </main>
    );
  }
}
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
