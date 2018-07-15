import React from 'react';
import PropTypes from 'prop-types';

// Components
import Menu from '../../components/menu/menu';
import MovieList from '../../components/movie-list/movie-list';

import '../home/home.scss';

const Favourites = (props) => {
  return (
    <div className="page">
      <div className="page__container">
        <Menu />
        <MovieList
          movies={props.favouriteMovies}
        />
      </div>
    </div>
  );
};

Favourites.propTypes = {
  favouriteMovies: PropTypes.array,
};

Favourites.defaultProps = {
  favouriteMovies: [],
};

export default Favourites;
