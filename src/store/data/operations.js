import {adaptOffer, adaptReview} from "../../utils";
import {
  loadOffers,
  loadReviews,
  loadOfferById,
  loadNearOffersById,
  loadFavoritesOffers,
  setIsLoadFlagOffers,
  setIsLoadFlagReviews,
  setIsLoadFlagOffer,
  setIsLoadFlagNearOffers,
  setIsLoadFlagFavoritesOffers,
  setUserReview, toggleOfferIsBookmark
} from "./actions";

import {redirectToRoute} from "../app/actions";
import {AppRoute} from "../../const";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      dispatch(loadOffers(
          data.map((it) => adaptOffer(it))));
      dispatch(setIsLoadFlagOffers(true));
    })
);

export const fetchReviewsList = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => {
      dispatch(loadReviews(
          data.map((it) => adaptReview(it))));
      dispatch(setIsLoadFlagReviews(true));
    })
);

export const fetchOfferById = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => {
      dispatch(loadOfferById(adaptOffer(data)));
      dispatch(setIsLoadFlagOffer(true));
    })
);

export const fetchNearOffersById = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => {
      dispatch(loadNearOffersById(
          data.map((it) => adaptOffer(it))
      ));
      dispatch(setIsLoadFlagNearOffers(true));
    })
);

export const postReview = ({review: comment, rating}, id) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(setUserReview(
          data.map((it) => adaptReview(it))
      ));
    })
    .catch((err) => {
      throw err;
    })
);

export const fetchFavoritesOffersList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => {
      dispatch(loadFavoritesOffers(
          data.map((it) => adaptOffer(it))));
      dispatch(setIsLoadFlagFavoritesOffers(true));
    })
    .catch((err) => {
      throw err;
    })
);

export const postOfferToFavorite = (id, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => {
      dispatch(toggleOfferIsBookmark(adaptOffer(data)));
    })
    .catch((err) => {
      dispatch(redirectToRoute(AppRoute.MAIN));
      throw err;
    })
);
