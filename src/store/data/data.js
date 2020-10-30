import {extend} from "../../utils";
import {ActionType} from "./actions";

const initialState = {
  offers: [],
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
  }

  return state;
};

export {data};
