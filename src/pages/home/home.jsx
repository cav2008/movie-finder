import React from 'react';
import PropTypes from 'prop-types';

// Components
import Menu from '../../components/menu/menu';
import Search from '../../components/search/search';
import MovieList from '../../components/movie-list/movie-list';

import './home.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="page">
        <div className="page__container">
          <Menu />
          <Search saveSearchResult={this.props.saveSearchResult} />
          <MovieList
            movies={this.props.searchResults}
          />
        </div>
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
