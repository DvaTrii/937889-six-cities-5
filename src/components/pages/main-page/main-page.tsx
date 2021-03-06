import * as React from "react";
import {connect} from "react-redux";

import Header from "../../header/header";
import CitiesList from "../../cities-list/cities-list";
import MainContent from "../../main-content/main-content";
import NoOffers from "../../no-offers/no-offers";

import {MainPageNoOffersClass} from "../../../const";
import {getOffersByCityNumber} from "../../../store/data/selectors";

type Props = {
  offersByCityNumber: number
}


const MainPage: React.FC<Props> = ({offersByCityNumber}) => {
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

const mapStateToProps = (state) => {
  return ({
    offersByCityNumber: getOffersByCityNumber(state),
  });
};

export {MainPage};
export default connect(mapStateToProps)(MainPage);
