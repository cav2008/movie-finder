import React from 'react';
import PropTypes from 'prop-types';

import MovieItem from '../movie-item/movie-item';

export default class Results extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        {this.props.searchResults.map((movie, index) => <MovieItem key={index} movie={movie} />)}
      </div>
    );
  }
}

Results.propTypes = {
  searchResults: PropTypes.array.isRequired,
};
