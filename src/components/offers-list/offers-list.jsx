import React from "react";
import PropTypes from "prop-types";

import OfferCard from "../offer-card/offer-card";

const OffersList = (props) => {
  const {offers} = props;

  return (offers.map((offer, index) => (<OfferCard
    key={index + offer.title}
    card={offer}/>))
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;
