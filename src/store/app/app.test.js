import {ActionType} from "./actions";
import {app} from "./app";

const state = {
  city: `Amsterdam`,
  activeSorter: `Popular`,
  hoveredOfferId: -1,
};

const newCity = `Paris`;
const newActiveSorter = `Price: low to high`;
const newHoveredOfferId = 23;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(app(void 0, {})).toEqual(state);
});

it(`Reducer should update city by set newCity`, () => {
  expect(app({city: `Amsterdam`},
      {
        type: ActionType.SET_CURRENT_CITY,
        payload: newCity
      })).toEqual({
    city: newCity
  });
});

it(`Reducer should update activeSorter by set newActiveSorter`, () => {
  expect(app({activeSorter: `Popular`},
      {
        type: ActionType.SET_ACTIVE_SORTER,
        payload: newActiveSorter
      })).toEqual({
    activeSorter: newActiveSorter
  });
});

it(`Reducer should update hoveredOfferId by set newHoveredOfferId`, () => {
  expect(app({hoveredOfferId: -1},
      {
        type: ActionType.SET_HOVERED_OFFER_ID,
        payload: newHoveredOfferId
      })).toEqual({
    hoveredOfferId: newHoveredOfferId
  });
});

it(`Reducer should reset hoveredOfferId by -1`, () => {
  expect(app({hoveredOfferId: 23},
      {
        type: ActionType.RESET_HOVERED_OFFER_ID,
        payload: -1
      })).toEqual({
    hoveredOfferId: -1
  });
});


