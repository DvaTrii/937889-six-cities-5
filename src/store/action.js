export const ActionType = {
  SET_CURRENT_CITY: `SET_CURRENT_CITY`,
  SET_ACTIVE_SORTER: `SET_ACTIVE_SORTER`,
};

export const ActionCreator = {
  setCurrentCity: (currentCityName) => ({
    type: ActionType.SET_CURRENT_CITY,
    payload: currentCityName
  }),
  setActiveSorter: (activeSorter) => ({
    type: ActionType.SET_ACTIVE_SORTER,
    payload: activeSorter
  })
};
