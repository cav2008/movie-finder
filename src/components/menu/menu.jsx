import React from 'react';

import './menu.scss';

export default class Menu extends React.Component {
  static changePage(e) {
    window.location.assign(`/#/${e.target.value}`);
  }

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="menu">
        <div className="menu__button-wrapper menu__button-wrapper--divider menu__button-wrapper--right">
          <button className="menu__button" onClick={Menu.changePage} value="">Search</button>
        </div>
        <div className="menu__button-wrapper menu__button-wrapper--left">
          <button className="menu__button" onClick={Menu.changePage} value="favourites">Favourites</button>
        </div>
      </div>
    );
  }
}
