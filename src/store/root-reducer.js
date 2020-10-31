import {combineReducers} from "redux";
import {app} from "./app/app";
import {data} from "./data/data";

export const NameSpace = {
  DATA: `DATA`,
  APP: `APP`,
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app,
});
