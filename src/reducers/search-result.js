const defaultState = {
  movies: [],
};

/**
 * Reducer function to used to change and store the correct data.
 * @param {Object} state the current state object.
 * @param {Object} action the action with the data to put in the store.
 * @return {Object} returns new state to put in store.
 */
export default function searchResult(state = defaultState, action) {
  switch (action.type) {
    case 'SAVE_SEARCH_RESULT':
      return Object.assign({}, state, {
        movies: action.data,
      });
    default:
      return state;
  }
}
