import {extend} from "../../utils";
import {ActionType} from "../action";
import offers from "../../mocks/offers";

const initialState = {
  offers,
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
