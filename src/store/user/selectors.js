import {NameSpace} from "../root-reducer";

const getAuthorizationStatus = (state) => state[NameSpace.USER].user;

export {getAuthorizationStatus};
