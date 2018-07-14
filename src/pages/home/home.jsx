import React from 'react';
import PropTypes from 'prop-types';

// Components
import Search from '../../components/search/search';
import Results from '../../components/results/results';

import './home.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Search saveSearchResult={this.props.saveSearchResult} />
        <Results
          searchResults={this.props.searchResults}
          saveFavouriteMovie={this.props.saveFavouriteMovie}
        />
      </div>
    );
  }
}

Home.propTypes = {
  searchResults: PropTypes.array.isRequired,
  saveSearchResult: PropTypes.func.isRequired,
  saveFavouriteMovie: PropTypes.func.isRequired,
};

Home.defaultProps = {
};
