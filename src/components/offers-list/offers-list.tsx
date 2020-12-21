import * as React from "react";
import PropTypes from "prop-types";

import OfferCard from "../offer-card/offer-card";

import {withLoadFlag} from "../../hocs/with-load-flag/with-load-flag";

const OffersList = (props) => {
  const {offers, cardClass} = props;

  return (offers.map((offer) => (<OfferCard
    key={offer.id}
    card={offer}
    cardClass={cardClass}
  />))
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withLoadFlag(OffersList);
