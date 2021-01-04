import * as React from "react";
import OfferCard from "../offer-card/offer-card";
import {withLoadFlag} from "../../hocs/with-load-flag/with-load-flag";

import {OfferCardType} from "../../types";

type Props = {
  offers: Array<OfferCardType>,
  cardClass: string
}
const OffersList: React.FC<Props> = ({offers, cardClass}) => {

  return (
    <React.Fragment>
      {
        offers.map((offer) => (<OfferCard
          key={offer.id}
          card={offer}
          cardClass={cardClass}
        />))
      }
    </React.Fragment>
  );
};

export default withLoadFlag(OffersList);
