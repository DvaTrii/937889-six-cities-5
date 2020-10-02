import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import MainPage from "../pages/main-page/main-page.jsx";
import LoginPage from "../pages/login-page/login-page.jsx";
import OfferPage from "../pages/offer-page/offer-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";

const App = (props) => {

  const {totalOffers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage totalOffers={totalOffers}/>
        </Route>
        <Route exact path="/login">
          <LoginPage/>
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage/>
        </Route>
        <Route exact path="/offer:id">
          <OfferPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  totalOffers: PropTypes.number.isRequired,
};

export default App;
