import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Header from "../../header/header";
import CitiesList from "../../cities-list/cities-list";
import MainContent from "../../main-content/main-content";
import NoOffers from "../../no-offers/no-offers";

import {MainPageNoOffersClass} from "../../../const";
import {getOffersByCityNumber} from "../../../store/data/selectors";


const MainPage = ({offersByCityNumber}) => {
  return (
    <div className="page page--gray page--main">

      <Header />

      <main className={`page__main page__main--index
      ${offersByCityNumber || MainPageNoOffersClass.NO_OFFERS}`}>

        <CitiesList />

        {offersByCityNumber ? <MainContent /> : <NoOffers />}

      </main>
    </div>
  );
};

MainPage.propTypes = {
  offersByCityNumber: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return ({
    offersByCityNumber: getOffersByCityNumber(state),
  });
};

export {MainPage};
export default connect(mapStateToProps)(MainPage);
