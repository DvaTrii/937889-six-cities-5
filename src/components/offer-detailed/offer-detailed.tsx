import * as React from "react";
import OfferImagesList from "../offer-images-list/offer-images-list";
import OfferAmenitiesList from "../offer-amenities-List/offer-amenities-list";
import OfferReviewsList from "../offer-reviews-list/offer-reviews-list";
import Map from "../map/map";

import {withLoadFlag} from "../../hocs/with-load-flag/with-load-flag";
import ReviewForm from "../review-form/review-form";
import FavoritesButton from "../favorites-button/favorites-button";
import {FavoritesButtonClassPrefix} from "../../const";

import {OfferCardType, ReviewType} from "../../types";

type Props = {
  offer: OfferCardType,
  reviews: Array<ReviewType>,
  nearOffers: Array<OfferCardType>,
  isLoadedNearOffers: boolean,
  authorizationStatus: boolean
}

const OfferDetailed: React.FC<Props> = ({offer, reviews, nearOffers, isLoadedNearOffers, authorizationStatus}) => {

  const {id, pictures, isPremium, isBookmark, price, title, type, rating, description, bedroomsMax,
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
            <FavoritesButton
              classPrefix={FavoritesButtonClassPrefix.PROPERTY}
              isBookmark={isBookmark}
              offerId={id}
            />
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
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

            <OfferReviewsList reviews={reviews} />

            {authorizationStatus && <ReviewForm />}

          </section>
        </div>
      </div>
      <section className="property__map map">
        <Map
          offers={nearOffers}
          isLoaded={isLoadedNearOffers}
          isMainPageMap={false}
        />
      </section>
    </section>
  );
};

export default withLoadFlag(OfferDetailed);
