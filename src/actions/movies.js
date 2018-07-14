export const saveSearchResult = (data) => {
  return {
    type: 'SAVE_SEARCH_RESULT',
    data,
  };
};

export const saveFavouriteMovie = (data) => {
  return {
    type: 'SAVE_FAVOURITE_MOVIE',
    data,
  };
};
