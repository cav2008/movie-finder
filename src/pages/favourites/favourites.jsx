import React from 'react';
import PropTypes from 'prop-types';

// Components
import Menu from '../../components/menu/menu';
import MovieList from '../../components/movie-list/movie-list';

import '../home/home.scss';

export default class Favourites extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="page">
        <div className="page__container">
          <Menu />
          <MovieList
            movies={this.props.favouriteMovies}
          />
        </div>
      </div>
    );
  }
}

Favourites.propTypes = {
  favouriteMovies: PropTypes.array,
};

Favourites.defaultProps = {
  favouriteMovies: [],
};
