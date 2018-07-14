import React from 'react';
import PropTypes from 'prop-types';

import { OMDB_URL, API_KEY } from '../../constants/constants';

import fetch from '../../helpers/fetch';

export default class Search extends React.Component {
  static createApiUrl(movieTitle) {
    return `${OMDB_URL}?apikey=${API_KEY}&t=${movieTitle}`;
  }

  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    if (e.key === 'Enter') {
      fetch(Search.createApiUrl(e.target.value))
        .then((data) => {
          this.props.saveSearchResult([data.data]);
        });
    }
  }

  render() {
    return (
      <div>
        <input type="text" onKeyPress={this.handleOnClick} />
      </div>
    );
  }
}

Search.propTypes = {
  saveSearchResult: PropTypes.func.isRequired,
};
