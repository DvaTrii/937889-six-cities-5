import * as React from "react";
import {Spinner} from "../../components/spinner/spinner";

export const withLoadFlag = (Component: React.FC) => (props) => {
  const {isLoaded} = props;
  return isLoaded ? <Component {...props} /> : <Spinner />;
};
