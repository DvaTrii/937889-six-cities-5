import {extend} from "../utils";
import {ActionType} from "./action";

const InitialState = {
  city: `Amsterdam`,
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:

      return extend(state, {
        city: action.payload,
      });
  }

  return state;
};

export {reducer};
