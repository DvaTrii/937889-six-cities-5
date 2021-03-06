import * as React from "react";

import Sorter from "../sorter/sorter";
import OffersList from "../offers-list/offers-list";
import {CardClass} from "../../const";
import Map from "../map/map";
import {getActiveCity} from "../../store/app/selectors";
import {getSortedOffers, getOffersByCityNumber, getIsLoadedOffers} from "../../store/data/selectors";
import {connect} from "react-redux";
import {OfferCardType} from "../../types";

type Props = {
  currentOffers: Array<OfferCardType>,
  city: string,
  offersByCityNumber: number,
  isLoadedOffers: boolean
};

const MainContent: React.FC<Props> = ({currentOffers, city, offersByCityNumber, isLoadedOffers}) => {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersByCityNumber} places to stay in {city}</b>

          <Sorter />

          <div className="cities__places-list places__list tabs__content">

            <OffersList
              offers={currentOffers}
              cardClass={CardClass.MAIN}
              isLoaded={isLoadedOffers}
            />

          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              offers={currentOffers}
              isLoaded={isLoadedOffers}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    city: getActiveCity(state),
    currentOffers: getSortedOffers(state),
    offersByCityNumber: getOffersByCityNumber(state),
    isLoadedOffers: getIsLoadedOffers(state),
  });
};

export {MainContent};
export default connect(mapStateToProps)(MainContent);
