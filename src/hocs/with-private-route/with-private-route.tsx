import * as React from "react";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../const";

export const withPrivateRoute = (Component: React.FC, authorizationStatus: boolean, URL: string = `/`) => (props) => {
  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Component {...props}/>;
  }
  return <Redirect to={URL}/>;
};
