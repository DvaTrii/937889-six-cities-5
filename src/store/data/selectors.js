import {createSelector} from "reselect";
import {NameSpace} from "../root-reducer";
import {sortOffers} from "../../utils";
import {getCity, getActiveSorter} from "../app/selectors";

const getOffers = (state) => state[NameSpace.DATA].offers;

const getOffersByCity = createSelector([getOffers, getCity],
    (offers, city) => offers.filter((it) => it.city.name === city));

const getSortedOffers = createSelector([getOffersByCity, getActiveSorter],
    (offers, activeSorter) => sortOffers(offers, activeSorter));

const getOffersByCityNumber = createSelector(getOffersByCity, (offers) => offers.length);

export {getOffers, getOffersByCity, getSortedOffers, getOffersByCityNumber};
