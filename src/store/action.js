export const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
};

export const ActionCreator = {
  setCurrentCity: (currentCityName) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload: currentCityName
  }),
};
