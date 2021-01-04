import * as React from "react";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

export const withPrivateRoute = (Component: typeof React.Component, authorizationStatus: boolean, URL: string = `/`) => (props) => {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Component {...props}/>;
  }
  return <Redirect to={URL}/>;
};
