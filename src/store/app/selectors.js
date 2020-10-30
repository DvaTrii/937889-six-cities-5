import {NameSpace} from "../root-reducer";

const getCity = (state) => state[NameSpace.APP].city;
const getCities = (cities) => Object.values(cities);
const getActiveSorter = (state) => state[NameSpace.APP].activeSorter;
const getHoveredOfferId = (state) => state[NameSpace.APP].hoveredOfferId;

export {getCity, getCities, getActiveSorter, getHoveredOfferId};
