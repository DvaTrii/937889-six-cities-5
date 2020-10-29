import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import MainPage from "../pages/main-page/main-page.jsx";
import LoginPage from "../pages/login-page/login-page.jsx";
import OfferPage from "../pages/offer-page/offer-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";

import {AppRoute} from "../../const.js";
import {connect} from "react-redux";
import {CitiesList} from "../cities-list/cities-list";

const App = (props) => {

  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={AppRoute.MAIN}
          render={() => <MainPage offers={offers} />} />
        <Route exact path={AppRoute.LOGIN} component={LoginPage} />
        <Route exact path={AppRoute.FAVORITES} component={FavoritesPage} />
        <Route exact
          path={AppRoute.OFFER}
          render={({match}) => {
            const {id} = match.params;
            return (<OfferPage
              offer={offers.find((item) => item.id === Number(id))}
              reviews={reviews}
            />);
          }} />
        <Redirect to={AppRoute.MAIN} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

const mapStateToProps = ({DATA}) => ({
  offers: DATA.offers,
});

export {App};
export default connect(mapStateToProps)(App);
