const defaultState = {
  searchedMovies: [],
  favouriteMovies: [],
};

/**
 * Reducer function to used to change and store the correct data.
 * @param {Object} state the current state object.
 * @param {Object} action the action with the data to put in the store.
 * @return {Object} returns new state to put in store.
 */
export default function Movies(state = defaultState, action) {
  switch (action.type) {
    case 'SAVE_SEARCH_RESULT':
      return Object.assign({}, state, {
        searchedMovies: action.data,
      });
    case 'SAVE_FAVOURITE_MOVIE':
      return Object.assign({}, state, {
        favouriteMovies: [action.data, ...state.favouriteMovies],
      });
    default:
      return state;
  }
}
