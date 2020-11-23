import React from "react";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

export const withPrivateRoute = (Component, authorizationStatus, URL = `/`) => {
  class PrivateRoute extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        return <Component {...this.props}/>;
      } else {
        return <Redirect to={URL}/>;
      }
    }
  }

  return PrivateRoute;
};

