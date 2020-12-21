import * as React from "react";
import OfferCard from "../offer-card/offer-card";
import {CardClass} from "../../const";

const FavoritesItem = ({offers, city}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((it) => <OfferCard key={it.id} card={it} cardClass={CardClass.FAVORITE}/>)}
      </div>
    </li>
  );
};

// FavoritesItem.propTypes = {
//   offers: PropTypes.arrayOf(PropTypes.object).isRequired,
//   city: PropTypes.string.isRequired
// };

export default FavoritesItem;
