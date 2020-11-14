export const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_ACTIVE_SORTER: `SET_ACTIVE_SORTER`,
  SET_HOVERED_OFFER_ID: `SET_HOVERED_OFFER_ID`,
  RESET_HOVERED_OFFER_ID: `RESET_HOVERED_OFFER_ID`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const setCurrentCity = (currentCityName) => ({
  type: ActionType.SET_CURRENT_CITY,
  payload: currentCityName
});

export const setActiveSorter = (activeSorter) => ({
  type: ActionType.SET_ACTIVE_SORTER,
  payload: activeSorter
});

export const setHoveredOfferId = (id) => ({
  type: ActionType.SET_HOVERED_OFFER_ID,
  payload: id
});

export const resetHoveredOfferId = () => ({
  type: ActionType.RESET_HOVERED_OFFER_ID,
  payload: -1
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

