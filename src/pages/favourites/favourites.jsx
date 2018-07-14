import React from 'react';
import PropTypes from 'prop-types';

// Components
import Menu from '../../components/menu/menu';
import Results from '../../components/results/results';

import '../home/home.scss';

export default class Favourites extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Menu />
        <Results
          movies={this.props.favouriteMovies}
        />
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
