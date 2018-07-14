import React from 'react';

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
      <div>
        <button onClick={Menu.changePage} value="">Home</button>
        <button onClick={Menu.changePage} value="favourites">Favourites</button>
      </div>
    );
  }
}
