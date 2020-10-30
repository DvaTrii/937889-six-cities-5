import {createSelector} from "reselect";
import {NameSpace} from "./store/root-reducer";
import {sortOffers} from "./utils";

const getOffers = (state) => state[NameSpace.DATA].offers;
const getCity = (state) => state[NameSpace.APP].city;
const getCities = (cities) => Object.values(cities);
const getActiveSorter = (state) => state[NameSpace.APP].activeSorter;

const getOffersByCity = createSelector([getOffers, getCity],
    (offers, city) => offers.filter((it) => it.city.name === city));

const getSortedOffers = createSelector([getOffersByCity, getActiveSorter],
    (offers, activeSorter) => sortOffers(offers, activeSorter));

export {getCity, getCities, getOffersByCity, getSortedOffers};
