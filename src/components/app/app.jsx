import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Main from "../main/main.jsx";
import Login from "../login/login.jsx";
import Offer from "../offer/offer.jsx";
import Favorites from "../favorites/favorites.jsx";

const App = (props) => {

  const {totalOffers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main totalOffers={totalOffers}/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
        <Route exact path="/offer:id">
          <Offer/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  totalOffers: PropTypes.number.isRequired,
};

export default App;
