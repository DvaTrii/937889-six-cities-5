import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FavoritesItem from "../favorites-item/favorites-item";
import {getFavoriteOffersCities, getFavoritesOffers} from "../../store/data/selectors";


const FavoritesList = ({offers, cities}) => {

  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {cities.map((it) => <FavoritesItem key={it} offers={offers.includes(it)}/>)}
        </ul>
      </section>
    </div>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return ({
    offers: getFavoritesOffers(state),
    cities: getFavoriteOffersCities(state)
  });
};

export {FavoritesList};
export default connect(mapStateToProps)(FavoritesList);
