import {AuthorizationStatus} from "../../const";
import {requireAuthorization, setUserData} from "./actions";

const authorizationSet = (dispatch) => (res) => {
  dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  dispatch(setUserData(res.data));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((res) => {
      authorizationSet(dispatch)(res);
    })
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then((res) => {
      authorizationSet(dispatch)(res);
    })
    .catch((err) => {
      throw err;
    })
);
