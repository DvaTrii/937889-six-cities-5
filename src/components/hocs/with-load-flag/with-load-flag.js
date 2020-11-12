import React from "react";
import {Spinner} from "../../spinner/spinner";

export const withLoadFlag = (Component) => (props) => {
  const {isLoaded} = props;
  return isLoaded ? <Component {...props} /> : <Spinner />;
};
