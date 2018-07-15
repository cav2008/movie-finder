import React from 'react';
import PropTypes from 'prop-types';

import './favourite-button.scss';

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
      this.props.callback();
    }
  }

  render() {
    return (
      <button className="fav-btn" onClick={this.handleClick}>+</button>
    );
  }
}

FavouriteButton.propTypes = {
  movie: PropTypes.object.isRequired,
  callback: PropTypes.func,
  favouriteMovies: PropTypes.array.isRequired,
  saveFavouriteMovie: PropTypes.func.isRequired,
};

FavouriteButton.defaultProps = {
  callback: null,
};
