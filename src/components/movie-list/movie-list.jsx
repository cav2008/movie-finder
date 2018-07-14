import React from 'react';
import PropTypes from 'prop-types';

import MovieItem from '../movie-item/movie-item';

export default class MovieList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        {this.props.movies.map((movie, index) => <MovieItem key={index} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
