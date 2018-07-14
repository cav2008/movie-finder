import React from 'react';
import PropTypes from 'prop-types';

import FavouriteButtonContainer from '../../containers/favourite-button';

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
      <div>
        <h2>{Title}</h2>
        <div>
          <div>
            <img src={Poster} alt={Title} />
          </div>
          <div>
            <p>{Plot}</p>
          </div>
          <div>
            <p>Year: {Year}</p>
            <p>Run Time: {Runtime}</p>
            <p>Genre: {Genre}</p>
            <p>Language: {Language}</p>
            <p>IMDb Rating: {imdbRating}</p>
          </div>
          <div>
            <FavouriteButtonContainer movie={this.props.movie} />
          </div>
        </div>
      </div>
    );
  }
}

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};
