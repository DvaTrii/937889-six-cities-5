import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const App = (props) => {

  const {totalOffers} = props;

  return (
    <Main totalOffers={totalOffers}/>
  );
};

App.propTypes = {
  totalOffers: PropTypes.number.isRequired,
};

export default App;
