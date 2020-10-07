import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import MainPage from "../pages/main-page/main-page.jsx";
import LoginPage from "../pages/login-page/login-page.jsx";
import OfferPage from "../pages/offer-page/offer-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";

const App = (props) => {

  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <MainPage offers={offers} />} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/favorites" component={FavoritesPage} />
        <Route exact
          path="/offer:id"
          render={() => <OfferPage
            offer={offers[1]}
            reviews={reviews}/>} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default App;
