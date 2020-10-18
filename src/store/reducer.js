import {extend} from "../utils";
import {ActionType} from "./action";

const InitialState = {
  city: `Amsterdam`,
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      let currentCity = action.payload;

      return extend(state, {
        city: currentCity,
      });
  }

  return state;
};

export {reducer};
