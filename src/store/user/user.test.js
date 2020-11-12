import {AuthorizationStatus} from "../../const";
import {ActionType} from "./actions";
import {user} from "./user";

const state = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: {name: ``},
};

const newUserInfo = {name: `Michael`};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual(state);
});

it(`Reducer should update authorizationStatus by set AuthorizationStatus.AUTH`, () => {
  expect(user({authorizationStatus: AuthorizationStatus.NO_AUTH},
      {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH
      })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH
  });
});

it(`Reducer should update userInfo by set newUserInfo`, () => {
  expect(user({userInfo: {name: ``}},
      {
        type: ActionType.SET_USER_INFO,
        payload: newUserInfo
      })).toEqual({
    userInfo: newUserInfo
  });
});
