export const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  GET_CURRENT_CITY_OFFERS: `GET_CURRENT_CITY_OFFERS`,
  RETURN_TO_MAINPAGE: `RETURN_TO_MAINPAGE`
};

export const ActionCreator = {
  setCurrentCity: (currentCityName) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload: currentCityName
  }),
  getCurrentCityOffers: (offers, currentCityName) => ({
    type: ActionType.GET_CURRENT_CITY_OFFERS,
    payload: offers.filter((it) => it.city === currentCityName)
  }),
  returnToMainPage: () => ({
    type: ActionType.RETURN_TO_MAINPAGE
  })
};
