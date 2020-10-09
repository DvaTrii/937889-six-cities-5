import React from "react";
import PropTypes from "prop-types";
import ReviewForm from "../review-form/review-form";
import OfferImageItem from "../offer-image-item/offer-image-item";
import OfferAmenityItem from "../offer-amenity-item/offer-amenity-item";
import OfferReviewItem from "../offer-review-item/offer-review-item";

const OfferDetailed = ({offer, reviews}) => {

  const {pictures, isPremium, isBookmark, price, title, type, rating, description, bedroomsMax,
    guestsMax, amenities, hostInfo: {avatar, name, isSuper}} = offer;

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">

          {pictures.map((item) => <OfferImageItem key={item} picture={item}/>)}

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
              {bedroomsMax}
            </li>
            <li className="property__feature property__feature--adults">
              {guestsMax}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">

              {amenities.map((item) => <OfferAmenityItem key ={item} text={item}/>)}

            </ul>
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
            <ul className="reviews__list">

              {reviews.map((review) => <OfferReviewItem key={review.reviewId} review={review}/>)}

            </ul>

            <ReviewForm />

          </section>
        </div>
      </div>
      <section className="property__map map"></section>
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
    bedroomsMax: PropTypes.string.isRequired,
    guestsMax: PropTypes.string.isRequired,
    amenities: PropTypes.array,
    hostInfo: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    })
  }),
  reviews: PropTypes.array.isRequired
};

export default OfferDetailed;
