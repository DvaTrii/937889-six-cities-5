import {extend} from "../utils";
import {ActionType} from "./action";

const InitialState = {
  city: `Amsterdam`,
  currentCityOffers: []
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.SET_CURRENT_CITY:
      let currentCity = action.payload;

      return extend(state, {
        city: currentCity,
      });

    case ActionType.GET_CURRENT_CITY_OFFERS:
      let currentCityOffers = action.payload;

      return extend(state, {
        currentCityOffers
      });

    case ActionType.RETURN_TO_MAINPAGE:
      return extend(state, InitialState);
  }

  return state;
};

export {reducer};
