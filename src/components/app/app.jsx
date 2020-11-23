import React from "react";
import {Router as BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import PropTypes from "prop-types";


import MainPage from "../pages/main-page/main-page.jsx";
import LoginPage from "../pages/login-page/login-page.jsx";
import OfferPage from "../pages/offer-page/offer-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";
import {withPrivateRoute} from "../../hocs/with-private-route/with-private-route";
import {AppRoute} from "../../const.js";
import {getAuthorizationStatus} from "../../store/user/selectors";
import {connect} from "react-redux";
import browserHistory from "../../browser-history";


const App = ({authorizationStatus}) => {
  const LoginWrappedPrivate = withPrivateRoute(LoginPage, !authorizationStatus);
  const FavoritesWrappedPrivate = withPrivateRoute(FavoritesPage, authorizationStatus, AppRoute.LOGIN);
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.MAIN}
          component={MainPage}
        />
        <Route
          exact
          path={AppRoute.FAVORITES}
          component={FavoritesWrappedPrivate}
        />
        <Route
          exact
          path={AppRoute.LOGIN}
          component={LoginWrappedPrivate}
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

App.propTypes = {
  authorizationStatus: PropTypes.bool.isRequired
};


const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {App};
export default connect(mapStateToProps)(App);
