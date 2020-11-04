export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

export const loadOffers = (loadedOffers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: loadedOffers
});

export const loadReviews = (loadedReviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: loadedReviews
});

