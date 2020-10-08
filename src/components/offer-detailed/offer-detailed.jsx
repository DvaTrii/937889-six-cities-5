import React from "react";
import PropTypes from "prop-types";
import ReviewForm from "../review-form/review-form";

const OfferDetailed = (props) => {

  const {offer, reviews} = props;

  const {id, pictures, isPremium, isBookmark, price, title, type, rating, description, bedroomsMax,
    guestsMax, amenities, hostInfo: {avatar, name, isSuper}} = offer;

  const getPicturesMarkup = (items) => {
    return items.map((picture, index) => {
      return (
        <div key={id + index} className="property__image-wrapper">
          <img className="property__image" src={picture} alt="Photo studio"></img>
        </div>
      );
    });
  };

  const getAmenitiesMarkup = (items) => {
    return items.map((item, index) => {
      return (
        <li key={id + index} className="property__inside-item">
          {item}
        </li>
      );
    });
  };

  const getReviewsMarkup = (items) => {
    return items.map((item, index) => {
      return (
        <li key={index + item.reviewId} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={item.userInfo.userAvatar} width="54" height="54" alt="Reviews avatar"></img>
            </div>
            <span className="reviews__user-name">
              {item.userInfo.userName}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `${item.reviewRating * 20}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {item.reviewText}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{item.reviewDate}</time>
          </div>
        </li>
      );
    });
  };

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">

          {getPicturesMarkup(pictures)}

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

              {getAmenitiesMarkup(amenities)}

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

              {getReviewsMarkup(reviews)}

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
