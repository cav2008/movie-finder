import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

// Redux
// Provider lets component use the store.
import { Provider } from 'react-redux';

import store from './store';
// Pages
import HomeContainer from './containers/home';
import FavouritesContainer from './containers/favourites';

// Styles
import './styles/global.scss';

// Main app component
// Stateless function, benefits are less code and is faster than classes.
// Use stateless function if you don't need to have React life cycle or constructor methods.
const AppRouter = () => (
  <Provider store={store}>
    <HashRouter>
      <div className="page">
        <Route exact path="/" component={HomeContainer} />
        <Route path="/favourites" component={FavouritesContainer} />
      </div>
    </HashRouter>
  </Provider>
);

export default AppRouter;
