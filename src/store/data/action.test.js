import {
  loadOffers,
  loadReviews,
  loadOfferById,
  loadNearOffersById,
  setIsLoadFlagOffers,
  setIsLoadFlagReviews,
  setIsLoadFlagOffer,
  setIsLoadFlagNearOffers,
  setUserReview,
  toggleOfferIsBookmark,
  ActionType, loadFavoritesOffers, setIsLoadFlagFavoritesOffers
} from "./actions";

describe(`Action creators work correctly`, () => {
  it(`Action creator for load offers works correctly`, () => {
    expect(loadOffers([])).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: []
    });
  });

  it(`Action creator for load reviews works correctly`, () => {
    expect(loadReviews([])).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: []
    });
  });

  it(`Action creator for load offer by id works correctly`, () => {
    expect(loadOfferById({})).toEqual({
      type: ActionType.LOAD_OFFER_BY_ID,
      payload: {}
    });
  });

  it(`Action creator for load near offers by id works correctly`, () => {
    expect(loadNearOffersById([])).toEqual({
      type: ActionType.LOAD_NEAR_OFFERS_BY_ID,
      payload: []
    });
  });

  it(`Action creator for load favorites offers works correctly`, () => {
    expect(loadFavoritesOffers([])).toEqual({
      type: ActionType.LOAD_FAVORITES_OFFERS,
      payload: []
    });
  });

  it(`Action creator for set isLoad offers flag works correctly`, () => {
    expect(setIsLoadFlagOffers(true)).toEqual({
      type: ActionType.SET_IS_LOAD_FLAG_OFFERS,
      payload: true
    });
  });

  it(`Action creator for set isLoad offer flag works correctly`, () => {
    expect(setIsLoadFlagOffer(true)).toEqual({
      type: ActionType.SET_IS_LOAD_FLAG_OFFER,
      payload: true
    });
  });

  it(`Action creator for set isLoad reviews flag works correctly`, () => {
    expect(setIsLoadFlagReviews(true)).toEqual({
      type: ActionType.SET_IS_LOAD_FLAG_REVIEWS,
      payload: true
    });
  });

  it(`Action creator for set isLoad near offers flag works correctly`, () => {
    expect(setIsLoadFlagNearOffers(true)).toEqual({
      type: ActionType.SET_IS_LOAD_FLAG_NEAR_OFFERS,
      payload: true
    });
  });

  it(`Action creator for set isLoad favorites offers flag works correctly`, () => {
    expect(setIsLoadFlagFavoritesOffers(true)).toEqual({
      type: ActionType.SET_IS_LOAD_FLAG_FAVORITES_OFFERS,
      payload: true
    });
  });

  it(`Action creator for set user review works correctly`, () => {
    expect(setUserReview({})).toEqual({
      type: ActionType.SET_USER_REVIEW,
      payload: {}
    });
  });

  it(`Action creator for toggle offer bookmark works correctly`, () => {
    expect(toggleOfferIsBookmark(1)).toEqual({
      type: ActionType.TOGGLE_OFFER_IS_BOOKMARK,
      payload: 1
    });
  });
});
