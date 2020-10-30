import {createSelector} from "reselect";
import {NameSpace} from "../root-reducer";
import {sortOffers} from "../../utils";
import {getCities, getCity, getActiveSorter} from "../app/selectors";

const getOffers = (state) => state[NameSpace.DATA].offers;

const getOffersByCity = createSelector([getOffers, getCity],
    (offers, city) => offers.filter((it) => it.city.name === city));

const getSortedOffers = createSelector([getOffersByCity, getActiveSorter],
    (offers, activeSorter) => sortOffers(offers, activeSorter));

export {getCity, getCities, getOffers, getOffersByCity, getSortedOffers};
