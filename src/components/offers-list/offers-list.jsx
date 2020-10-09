import React from "react";
import PropTypes from "prop-types";

import OfferCard from "../offer-card/offer-card";

const OffersList = (props) => {
  const {offers, onCardHeaderClickHandler} = props;

  return (offers.map((offer) => (<OfferCard
    key={offer.id}
    card={offer}
    onCardHeaderClickHandler={onCardHeaderClickHandler}/>))
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  onCardHeaderClickHandler: PropTypes.func.isRequired
};

export default OffersList;
