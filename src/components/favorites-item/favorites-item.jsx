import React from "react";
import OfferCard from "../offer-card/offer-card";
import {CardClass} from "../../const";
import PropTypes from "prop-types";

const FavoritesItem = ({offers}) => {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{offers[0].city.name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((it) => <OfferCard key={`favorites` + it.id} card={it} cardClass={CardClass.FAVORITE}/>)}
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  offers: PropTypes.array.isRequired
};

export default FavoritesItem;
