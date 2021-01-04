import * as React from "react";
import OfferReview from "../offer-review/offer-review";

import {ReviewType} from "../../types";

type Props = {
  reviews: Array<ReviewType>
}

const OfferReviewsList: React.FC<Props> = ({reviews}) => {

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

export default OfferReviewsList;
