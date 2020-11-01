import {NameSpace} from "../root-reducer";

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getUserName = (state) => state[NameSpace.USER].userInfo.name;

export {getAuthorizationStatus, getUserName};
