import React from "react";
import PropTypes from "prop-types";

const OfferReviewsList = ({reviews}) => {

  return (
    <ul className="reviews__list">
      {reviews.map((review) => {

        return (
          <li key={review.reviewId} className="reviews__review">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={review.userInfo.userAvatar} width="54" height="54" alt="Reviews avatar"></img>
              </div>
              <span className="reviews__user-name">
                {review.userInfo.userName}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: `${review.reviewRating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">
                {review.reviewText}
              </p>
              <time className="reviews__time" dateTime="2019-04-24">{review.reviewDate}</time>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

OfferReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default OfferReviewsList;
