import {NameSpace} from "../root-reducer";

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

export {getAuthorizationStatus};
