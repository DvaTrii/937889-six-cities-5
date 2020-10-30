import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Header from "../../header/header";
import CitiesList from "../../cities-list/cities-list";
import MainContent from "../../main-content/main-content";
import NoOffers from "../../no-offers/no-offers";

import {MainPageNoOffersClass} from "../../../const";
import {Cities} from "../../../const";
import {getSortedOffers} from "../../../store/data/selectors";
import {getCities, getCity} from "../../../store/app/selectors";

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

const mapStateToProps = (state) => {
  return ({
    city: getCity(state),
    currentOffers: getSortedOffers(state),
    cities: getCities(Cities)
  });
};

export {MainPage};
export default connect(mapStateToProps)(MainPage);
