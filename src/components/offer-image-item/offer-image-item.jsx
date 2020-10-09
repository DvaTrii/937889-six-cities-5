import React from "react";
import PropTypes from "prop-types";

const OfferImageItem = ({picture}) => {

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={picture} alt="Photo studio"></img>
    </div>
  );
};

OfferImageItem.propTypes = {
  picture: PropTypes.string.isRequired
};

export default OfferImageItem;
