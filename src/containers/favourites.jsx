// Redux
import { connect } from 'react-redux';

import Favourites from '../pages/favourites/favourites';

/**
 * Maps the props that will be passed to the component to a state property.
 * @param {Object} state the state data object that you want to pass to component.
 * @return {Object} object of props to be available to component.
 */
function mapStateToProps(state) {
  return {
    favouriteMovies: state.movies.favouriteMovies,
  };
}

export default connect(mapStateToProps)(Favourites);
