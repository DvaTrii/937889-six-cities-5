import {combineReducers} from "redux";
import {app} from "./app/app";
import {data} from "./data/data";
import {user} from "./user/user";

export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app,
  [NameSpace.USER]: user,
});
