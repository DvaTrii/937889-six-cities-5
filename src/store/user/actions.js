import {AuthorizationStatus} from "../../const";

export const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER_INFO: `SET_USER_INFO`,
};

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setUserData = (data) => ({
  type: ActionType.SET_USER_INFO,
  payload: data,
});

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((res) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUserData(res.data));
    })
    .catch((err) => {
      throw err;
    })
);
