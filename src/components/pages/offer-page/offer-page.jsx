import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import OfferDetailed from "../../offer-detailed/offer-detailed";
import Header from "../../header/header";
import OffersList from "../../offers-list/offers-list";

import {CardClass} from "../../../const";
import nearOffers from "../../../mocks/offers";
import {reviews} from "../../../mocks/reviews";
import {getOfferById} from "../../../store/data/selectors";

const OfferPage = (props) => {

  const {offer} = props;

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">

        <OfferDetailed
          offer={offer}
          reviews={reviews}
        />

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList
                offers={nearOffers}
                cardClass={CardClass.NEAR}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  offer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return ({
    offer: getOfferById(state, ownProps),
  });
};

export {OfferPage};
export default connect(mapStateToProps)(OfferPage);
