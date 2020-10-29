import React from "react";
import PropTypes from "prop-types";
import OfferImagesList from "../offer-images-list/offer-images-list";
import OfferAmenitiesList from "../offer-amenities-List/offer-amenities-list";
import OfferReviewsList from "../offer-reviews-list/offer-reviews-list";
import Map from "../map/map";

const OfferDetailed = ({offer, reviews, nearOffers}) => {

  const {pictures, isPremium, isBookmark, price, title, type, rating, description, bedroomsMax,
    guestsMax, amenities, hostInfo: {avatar, name, isSuper}} = offer;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">

          <OfferImagesList pictures={pictures} />

        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium && (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          )}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <button className={`place-card__bookmark-button
              ${isBookmark && `place-card__bookmark-button--active`}
              button`} type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${rating * 20}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedroomsMax} ${bedroomsMax === 1 ? `Bedroom` : `Bedrooms`}
            </li>
            <li className="property__feature property__feature--adults">
              Max {guestsMax} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>

            <OfferAmenitiesList amenities={amenities} />

          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={`property__avatar-wrapper ${isSuper && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
                <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar"></img>
              </div>
              <span className="property__user-name">
                {name}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>

          <OfferReviewsList reviews={reviews} />

        </div>
      </div>
      <section className="property__map map">
        <Map offers={nearOffers}/>
      </section>
    </section>
  );
};

OfferDetailed.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    pictures: PropTypes.array.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    bedroomsMax: PropTypes.number.isRequired,
    guestsMax: PropTypes.number.isRequired,
    amenities: PropTypes.array,
    hostInfo: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    })
  }),
  reviews: PropTypes.array.isRequired,
  nearOffers: PropTypes.array.isRequired
};

export default OfferDetailed;
