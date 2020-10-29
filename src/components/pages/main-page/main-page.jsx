import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Header from "../../header/header";
import CitiesList from "../../cities-list/cities-list";
import MainContent from "../../main-content/main-content";
import NoOffers from "../../no-offers/no-offers";

import {MainPageNoOffersClass} from "../../../const";
import {Cities} from "../../../const";
import {sortOffers} from "../../../utils";

const MainPage = (props) => {

  const {currentOffers, city, cities} = props;

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className={`page__main page__main--index
      ${currentOffers.length || MainPageNoOffersClass.NO_OFFERS}`}>

        <CitiesList cities={cities} />
        {
          currentOffers.length ?
            <MainContent
              currentOffers={currentOffers}
              city={city}/> :

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
  const {APP: {city, activeSorter}} = state;

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
