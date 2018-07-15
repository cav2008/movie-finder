import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { saveFavouriteMovie } from '../actions/movies';

import FavouriteButton from '../components/favourite-button/favourite-button';

function mapStateToProps(state, ownProps) {
  return {
    favouriteMovies: state.movies.favouriteMovies,
    movie: ownProps.movie,
    callback: ownProps.callback,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    saveFavouriteMovie,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(FavouriteButton);
