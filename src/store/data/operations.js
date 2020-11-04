import {adaptOffer, adaptReview} from "../../utils";
import {loadOffers, loadReviews} from "./actions";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(
        data.map((it) => adaptOffer(it))
    )))
);

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadReviews(
        data.map((it) => adaptReview(it))
    )))
);
