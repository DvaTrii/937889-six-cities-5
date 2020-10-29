import {extend} from "../../utils";
import {ActionType} from "../action";

const initialState = {
  city: `Amsterdam`,
  activeSorter: `Popular`,
  hoveredOfferId: -1,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.SET_ACTIVE_SORTER:
      return extend(state, {
        activeSorter: action.payload,
      });

    case ActionType.SET_HOVERED_OFFER_ID:
      return extend(state, {
        hoveredOfferId: action.payload,
      });

    case ActionType.RESET_HOVERED_OFFER_ID:
      return extend(state, {
        hoveredOfferId: action.payload,
      });
  }

  return state;
};

export {app};
