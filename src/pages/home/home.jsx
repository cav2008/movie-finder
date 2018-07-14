import React from 'react';
import PropTypes from 'prop-types';

// Components
import Menu from '../../components/menu/menu';
import Search from '../../components/search/search';
import Results from '../../components/results/results';

import './home.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <Menu />
        <Search saveSearchResult={this.props.saveSearchResult} />
        <Results
          movies={this.props.searchResults}
        />
      </div>
    );
  }
}

Home.propTypes = {
  searchResults: PropTypes.array.isRequired,
  saveSearchResult: PropTypes.func.isRequired,
};

Home.defaultProps = {
};
