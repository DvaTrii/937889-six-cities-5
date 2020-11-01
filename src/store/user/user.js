import {AuthorizationStatus} from "../../const";
import {ActionType} from "./actions";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.payload,
      });
  }

  return state;
};

export {user};
