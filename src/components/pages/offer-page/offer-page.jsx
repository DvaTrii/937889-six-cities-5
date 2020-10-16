import React from "react";
import PropTypes from "prop-types";

import OfferDetailed from "../../offer-detailed/offer-detailed";
import Header from "../../header/header";
import OffersList from "../../offers-list/offers-list";

import {CardClass} from "../../../const";
import offers from "../../../mocks/offers";

const OfferPage = (props) => {

  const {offer, reviews} = props;

  const nearOffers = offers.filter((item) => offer.nearOffers.includes(item.id));

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">

        <OfferDetailed
          offer={offer}
          reviews={reviews}
          nearOffers={nearOffers}
        />

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList
                offers={nearOffers}
                cardClass={CardClass.near}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  offer: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default OfferPage;
