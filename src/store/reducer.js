import {extend} from "../utils";
import {ActionType} from "./action";

const InitialState = {
  city: `Amsterdam`,
  activeSorter: `Popular`,
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.SET_ACTIVE_SORTER:
      return extend(state, {
        activeSorter: action.payload,
      });
  }

  return state;
};

export {reducer};
