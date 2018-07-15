import React from 'react';
import PropTypes from 'prop-types';

// Components
import Menu from '../../components/menu/menu';
import Search from '../../components/search/search';
import MovieList from '../../components/movie-list/movie-list';

import './home.scss';

const Home = (props) => {
  return (
    <div className="page">
      <div className="page__container">
        <Menu />
        <Search saveSearchResult={props.saveSearchResult} />
        <MovieList
          movies={props.searchResults}
        />
      </div>
    </div>
  );
};

Home.propTypes = {
  searchResults: PropTypes.array.isRequired,
  saveSearchResult: PropTypes.func.isRequired,
};

export default Home;
