import React from "react";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

export const withPrivateRoute = (Component, authorizationStatus, URL = `/`) => {

  function PrivateRoute(props) {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return <Component {...props}/>;
    } else {
      return <Redirect to={URL}/>;
    }
  }

  return PrivateRoute;
};

