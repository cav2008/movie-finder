import React from 'react';
import PropTypes from 'prop-types';

import FavouriteButtonContainer from '../../containers/favourite-button';

import './movie-item.scss';

export default class MovieItem extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    const {
      Title, Plot, Poster, Year, Runtime, Genre, imdbRating, Language,
    } = this.props.movie;

    return (
      <div className="movie">
        <div className="movie__header-row">
          <div className="btn-wrapper">
            <FavouriteButtonContainer movie={this.props.movie} />
          </div>
          <h2 className="movie__title">{Title}</h2>
        </div>
        <div className="movie__detail-row">
          <div className="movie__content movie__content--center">
            <img className="movie__img" src={Poster} alt={Title} />
          </div>
          <div className="movie__content movie__content--60 movie__content--padding">
            <p className="movie__info">{Plot}</p>
          </div>
          <div className="movie__content movie__content--padding">
            <p className="movie__info">
              Year: <span className="movie__info--no-bold">{Year}</span>
            </p>
            <p className="movie__info">
              Run Time: <span className="movie__info--no-bold">{Runtime}</span>
            </p>
            <p className="movie__info">
              Genre: <span className="movie__info--no-bold">{Genre}</span>
            </p>
            <p className="movie__info">
              Language: <span className="movie__info--no-bold">{Language}</span>
            </p>
            <p className="movie__info">
              IMDb Rating: <span className="movie__info--no-bold">{imdbRating}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
