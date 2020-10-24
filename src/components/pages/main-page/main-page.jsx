import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Header from "../../header/header";
import CitiesList from "../../cities-list/cities-list";
import NoOffers from "../../no-offers/no-offers";
import Sorter from "../../sorter/sorter";
import OffersList from "../../offers-list/offers-list";
import Map from "../../map/map";

import {CardClass, MainPageNoOffersClass} from "../../../const";
import {Cities} from "../../../const";
import {sortOffers} from "../../../utils";

const MainPage = (props) => {

  const {currentOffers, city, cities} = props;

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className={`page__main page__main--index
      ${currentOffers.length !== 0 ?
      `` :
      MainPageNoOffersClass.NO_OFFERS}`}>

        <CitiesList cities={cities} />
        {
          currentOffers.length !== 0 ?
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
            </div> :

            <NoOffers city={city}/>
        }
      </main>
    </div>
  );
};

MainPage.propTypes = {
  cities: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  currentOffers: PropTypes.array.isRequired
};

const mapStateToProps = (state, {offers}) => {
  const {city, activeSorter} = state;

  const cities = Object.values(Cities);
  let currentOffers = offers.filter((it) => it.city.name === city);
  currentOffers = sortOffers(currentOffers, activeSorter);

  return ({
    city,
    currentOffers,
    cities
  });
};

export {MainPage};
export default connect(mapStateToProps)(MainPage);
