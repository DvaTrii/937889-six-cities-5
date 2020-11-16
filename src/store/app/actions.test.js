import {
  setCurrentCity,
  setActiveSorter,
  setHoveredOfferId,
  resetHoveredOfferId,
  redirectToRoute,
  ActionType
} from "./actions";

describe(`Action creators work correctly`, () => {
  it(`Action creator for set current city works correctly`, () => {
    expect(setCurrentCity(`Amsterdam`)).toEqual({
      type: ActionType.SET_CURRENT_CITY,
      payload: `Amsterdam`
    });
  });

  it(`Action creator for set active sorter works correctly`, () => {
    expect(setActiveSorter(`Popular`)).toEqual({
      type: ActionType.SET_ACTIVE_SORTER,
      payload: `Popular`
    });
  });

  it(`Action creator for set hovered offer id works correctly`, () => {
    expect(setHoveredOfferId(23)).toEqual({
      type: ActionType.SET_HOVERED_OFFER_ID,
      payload: 23
    });
  });

  it(`Action creator for reset hovered offer id works correctly`, () => {
    expect(resetHoveredOfferId(23)).toEqual({
      type: ActionType.RESET_HOVERED_OFFER_ID,
      payload: -1
    });
  });

  it(`Action creator for redirect to root works correctly`, () => {
    expect(redirectToRoute(`/login`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/login`
    });
  });
});
