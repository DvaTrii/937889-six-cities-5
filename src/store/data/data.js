import {extend} from "../../utils";
import {ActionType} from "./actions";

const initialState = {
  offers: [],
  reviews: [],
  offerById: {},
  nearOffersById: [],
  favoritesOffers: [],
  isLoadedOffers: false,
  isLoadedReviews: false,
  isLoadedOfferById: false,
  isLoadedNearOffers: false,
  isLoadedFavoritesOffers: false,
};

const replaceItem = (arr, id, newItem) => {
  const idx = arr.findIndex((el) => el.id === id);

  return [...arr.slice(0, idx),
    newItem,
    ...arr.slice(idx + 1)];
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_OFFER_BY_ID:
      return extend(state, {
        offerById: action.payload,
      });
    case ActionType.LOAD_NEAR_OFFERS_BY_ID:
      return extend(state, {
        nearOffersById: action.payload,
      });
    case ActionType.LOAD_FAVORITES_OFFERS:
      return extend(state, {
        favoritesOffers: action.payload,
      });
    case ActionType.SET_IS_LOAD_FLAG_OFFERS:
      return extend(state, {
        isLoadedOffers: action.payload,
      });
    case ActionType.SET_IS_LOAD_FLAG_OFFER:
      return extend(state, {
        isLoadedOfferById: action.payload,
      });
    case ActionType.SET_IS_LOAD_FLAG_REVIEWS:
      return extend(state, {
        isLoadedReviews: action.payload,
      });
    case ActionType.SET_IS_LOAD_FLAG_NEAR_OFFERS:
      return extend(state, {
        isLoadedNearOffers: action.payload,
      });
    case ActionType.SET_IS_LOAD_FLAG_FAVORITES_OFFERS:
      return extend(state, {
        isLoadedFavoritesOffers: action.payload,
      });
    case ActionType.SET_USER_REVIEW:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.TOGGLE_OFFER_IS_BOOKMARK:
      return extend(state, {
        offerById: action.payload,
        offers: replaceItem(state.offers, action.payload.id, action.payload)
      });
  }

  return state;
};

export {data};
