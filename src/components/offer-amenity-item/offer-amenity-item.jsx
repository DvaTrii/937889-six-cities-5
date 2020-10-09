import React from "react";
import PropTypes from "prop-types";

const OfferAmenityItem = ({text}) => {

  return (
    <li className="property__inside-item">
      {text}
    </li>
  );
};

OfferAmenityItem.propTypes = {
  text: PropTypes.string.isRequired
};

export default OfferAmenityItem;
