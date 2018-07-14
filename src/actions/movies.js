export function saveSearchResult(data) {
  return {
    type: 'SAVE_SEARCH_RESULT',
    data,
  };
}

export function saveFavouriteMovie(data) {
  return {
    type: 'SAVE_FAVOURITE_MOVIE',
    data,
  };
}
