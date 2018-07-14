import React from 'react';
import PropTypes from 'prop-types';

// Components
import Search from '../../components/search/search';
import Results from '../../components/results/results';

import './initial.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Search saveSearchResult={this.props.saveSearchResult} />
        <Results searchResults={this.props.searchResults} />
      </div>
    );
  }
}

Home.propTypes = {
  searchResults: PropTypes.array.isRequired,
  saveSearchResult: PropTypes.func.isRequired,
};

Home.defaultProps = {
};
