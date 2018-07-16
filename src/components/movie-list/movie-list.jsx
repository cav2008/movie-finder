import React from 'react';
import PropTypes from 'prop-types';

import MovieItem from '../movie-item/movie-item';

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => <MovieItem key={index} movie={movie} />)}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
