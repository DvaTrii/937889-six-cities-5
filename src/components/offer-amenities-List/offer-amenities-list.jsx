import React from "react";
import PropTypes from "prop-types";

const OfferAmenitiesList = ({amenities}) => {

  return (
    <ul className="property__inside-list">
      {amenities.map((name) => {
        return (
          <li key={name} className="property__inside-item">
            {name}
          </li>
        );
      })}
    </ul>
  );
};

OfferAmenitiesList.propTypes = {
  amenities: PropTypes.array.isRequired
};

export default OfferAmenitiesList;
