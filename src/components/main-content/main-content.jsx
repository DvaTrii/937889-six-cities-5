import React from "react";
import PropTypes from "prop-types";

import Sorter from "../sorter/sorter";
import OffersList from "../offers-list/offers-list";
import {CardClass} from "../../const";
import Map from "../map/map";

const MainContent = ({currentOffers, city}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} places to stay in {city}</b>

          <Sorter />

          <div className="cities__places-list places__list tabs__content">

            <OffersList
              offers={currentOffers}
              cardClass={CardClass.MAIN}/>

          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map offers={currentOffers}/>
          </section>
        </div>
      </div>
    </div>
  );
};

MainContent.propTypes = {
  currentOffers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
};

export default MainContent;
