import * as React from "react";
import {Spinner} from "../../components/spinner/spinner";

export const withLoadFlag = (Component: typeof React.Component) => (props) => {
  const {isLoaded} = props;
  return isLoaded ? <Component {...props} /> : <Spinner />;
};
