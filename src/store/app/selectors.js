import {NameSpace} from "../root-reducer";

const getCity = (state) => state[NameSpace.APP].city;
const getCities = (cities) => Object.values(cities);
const getActiveSorter = (state) => state[NameSpace.APP].activeSorter;

export {getCity, getCities, getActiveSorter};
