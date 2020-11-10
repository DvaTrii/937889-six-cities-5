import {
  ActionType,
  requireAuthorization,
  setUserData
} from "./actions";

describe(`Action creators work correctly`, () => {
  it(`Action creator for require authorization works correctly`, () => {
    expect(requireAuthorization(true)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: true,
    });
  });

  it(`Action creator for set user data works correctly`, () => {
    expect(setUserData({})).toEqual({
      type: ActionType.SET_USER_INFO,
      payload: {},
    });
  });
});
