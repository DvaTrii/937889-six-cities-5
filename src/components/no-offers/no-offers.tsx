import * as React from "react";
import {connect} from "react-redux";

import {getActiveCity} from "../../store/app/selectors";

type Props = {
  city: string
};

const NoOffers: React.FC<Props> = ({city}) => {
  return (
    <div className="cities">
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No places to stay available</b>
            <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
          </div>
        </section>
        <div className="cities__right-section"/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    city: getActiveCity(state)
  });
};

export {NoOffers};
export default connect(mapStateToProps)(NoOffers);
