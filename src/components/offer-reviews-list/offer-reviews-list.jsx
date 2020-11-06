import React from "react";
import PropTypes from "prop-types";
import OfferReview from "../offer-review/offer-review";

const OfferReviewsList = ({reviews}) => {

  return (
    <ul className="reviews__list">
      {reviews.map((review) => {

        return (
          <OfferReview key={review.id} review={review}/>
        );
      })}
    </ul>
  );
};

OfferReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default OfferReviewsList;
