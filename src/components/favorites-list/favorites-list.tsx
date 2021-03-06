import * as React from "react";
import {connect} from "react-redux";
import FavoritesItem from "../favorites-item/favorites-item";
import {getFavoriteOffersCities, getFavoritesOffers} from "../../store/data/selectors";
import {OfferCardType, Cities} from "../../types"

type Props = {
  offers: Array<OfferCardType>,
  cities: Array<Cities>
}

const FavoritesList: React.FC<Props> = ({offers, cities}) => {
  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {cities.map((it) => <FavoritesItem key={it} city={it} offers={offers.filter((offer) => offer.city.name === it)}/>)}
        </ul>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => {
  return ({
    offers: getFavoritesOffers(state),
    cities: getFavoriteOffersCities(state)
  });
};

export {FavoritesList};
export default connect(mapStateToProps)(FavoritesList);
