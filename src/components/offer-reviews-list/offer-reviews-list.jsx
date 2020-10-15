import React from "react";
import PropTypes from "prop-types";
import OfferReview from "../offer-review/offer-review";
import ReviewForm from "../review-form/review-form";

const OfferReviewsList = ({reviews}) => {

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>

      <ul className="reviews__list">
        {reviews.map((review) => {

          return (
            <OfferReview key={review.id} review={review}/>
          );
        })}
      </ul>
      <ReviewForm />

    </section>
  );
};

OfferReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default OfferReviewsList;
