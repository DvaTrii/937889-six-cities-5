export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  LOAD_OFFER_BY_ID: `LOAD_OFFER_BY_ID`,
  LOAD_NEAR_OFFERS_BY_ID: `LOAD_NEAR_OFFERS_BY_ID`,
  LOAD_FAVORITES_OFFERS: `LOAD_FAVORITES_OFFERS`,
  SET_IS_LOAD_FLAG_OFFERS: `SET_IS_LOAD_FLAG_OFFERS`,
  SET_IS_LOAD_FLAG_OFFER: `SET_IS_LOAD_FLAG_OFFER`,
  SET_IS_LOAD_FLAG_REVIEWS: `SET_IS_LOAD_FLAG_REVIEWS`,
  SET_IS_LOAD_FLAG_NEAR_OFFERS: `SET_IS_LOAD_FLAG_NEAR_OFFERS`,
  SET_IS_LOAD_FLAG_FAVORITES_OFFERS: `SET_IS_LOAD_FLAG_FAVORITES_OFFERS`,
  SET_USER_REVIEW: `SET_USER_REVIEW`,
};

export const loadOffers = (loadedOffers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: loadedOffers
});

export const loadReviews = (loadedReviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: loadedReviews
});

export const loadOfferById = (loadedOfferById) => ({
  type: ActionType.LOAD_OFFER_BY_ID,
  payload: loadedOfferById
});

export const loadNearOffersById = (loadedNearOffersById) => ({
  type: ActionType.LOAD_NEAR_OFFERS_BY_ID,
  payload: loadedNearOffersById
});

export const loadFavoritesOffers = ({payload}) => ({
  type: ActionType.LOAD_FAVORITES_OFFERS,
  payload
});

export const setIsLoadFlagOffers = (setFlag) => ({
  type: ActionType.SET_IS_LOAD_FLAG_OFFERS,
  payload: setFlag
});

export const setIsLoadFlagOffer = (setFlag) => ({
  type: ActionType.SET_IS_LOAD_FLAG_OFFER,
  payload: setFlag
});

export const setIsLoadFlagReviews = (setFlag) => ({
  type: ActionType.SET_IS_LOAD_FLAG_REVIEWS,
  payload: setFlag
});

export const setIsLoadFlagNearOffers = (setFlag) => ({
  type: ActionType.SET_IS_LOAD_FLAG_NEAR_OFFERS,
  payload: setFlag
});

export const setIsLoadFlagFavoritesOffers = (setFlag) => ({
  type: ActionType.SET_IS_LOAD_FLAG_FAVORITES_OFFERS,
  payload: setFlag
});

export const setUserReview = (data) => ({
  type: ActionType.SET_USER_REVIEW,
  payload: data,
});

