import {adaptOffer, adaptReview} from "../../utils";

export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

const loadOffers = (loadedOffers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: loadedOffers
});

const loadReviews = (loadedReviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: loadedReviews
});

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
