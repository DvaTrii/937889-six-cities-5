import React from "react";
import {Spinner} from "../../components/spinner/spinner";

export const withLoadFlag = (Component) => (props) => {
  const {isLoaded} = props;
  return isLoaded ? <Component {...props} /> : <Spinner />;
};
