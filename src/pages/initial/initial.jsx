import React from 'react';
import PropTypes from 'prop-types';

// Components
import Search from '../../components/search/search';

import './initial.scss';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Search saveSearchResult={this.props.saveSearchResult} />
      </div>
    );
  }
}

Chat.propTypes = {
  saveSearchResult: PropTypes.func.isRequired,
};

Chat.defaultProps = {
};
