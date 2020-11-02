import React from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import MainPage from "../pages/main-page/main-page.jsx";
import LoginPage from "../pages/login-page/login-page.jsx";
import OfferPage from "../pages/offer-page/offer-page.jsx";
import PrivateRoute from "../private-route/private-route";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";

import {AppRoute} from "../../const.js";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={AppRoute.MAIN}
          component={MainPage}
        />
        <Route
          exact
          path={AppRoute.LOGIN}
          component={LoginPage}
        />
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          component={FavoritesPage}
        />
        <Route exact
          path={AppRoute.OFFER}
          component={OfferPage}
        />
        <Redirect to={AppRoute.MAIN} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
