import * as React from "react";
import PropTypes from "prop-types";
import OfferReview from "../offer-review/offer-review";

const OfferReviewsList = ({reviews}) => {

  return (
    <ul className="reviews__list">
      {reviews.map((review) => {

        return (
          <OfferReview key={review.id + review.date} review={review}/>
        );
      })}
    </ul>
  );
};

OfferReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default OfferReviewsList;
