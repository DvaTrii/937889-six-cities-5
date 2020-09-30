import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {totalOffers} = props;

  return (
    <Main totalOffers={totalOffers}/>
  );
};

export default App;
