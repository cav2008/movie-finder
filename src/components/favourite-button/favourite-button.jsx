import React from 'react';
import PropTypes from 'prop-types';

export default class FavouriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  isFavourited(addMovie) {
    return this.props.favouriteMovies.filter((movie) => {
      return movie.imdbID === addMovie.imdbID;
    }).length > 0;
  }

  handleClick() {
    if (!this.isFavourited(this.props.movie)) {
      this.props.saveFavouriteMovie(this.props.movie);
    }
  }

  render() {
    return (
      <button onClick={this.handleClick}>Favourite</button>
    );
  }
}

FavouriteButton.propTypes = {
  movie: PropTypes.object.isRequired,
  favouriteMovies: PropTypes.array.isRequired,
  saveFavouriteMovie: PropTypes.func.isRequired,
};
