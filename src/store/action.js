export const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_ACTIVE_SORTER: `SET_ACTIVE_SORTER`,
  SET_HOVERED_OFFER_ID: `SET_HOVERED_OFFER_ID`,
  RESET_HOVERED_OFFER_ID: `RESET_HOVERED_OFFER_ID`
};

export const ActionCreator = {
  setCurrentCity: (currentCityName) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload: currentCityName
  }),
  setActiveSorter: (activeSorter) => ({
    type: ActionType.SET_ACTIVE_SORTER,
    payload: activeSorter
  }),
  setHoveredOfferId: (id) => ({
    type: ActionType.SET_HOVERED_OFFER_ID,
    payload: id
  }),
  resetHoveredOfferId: () => ({
    type: ActionType.RESET_HOVERED_OFFER_ID,
    payload: -1
  })
};
