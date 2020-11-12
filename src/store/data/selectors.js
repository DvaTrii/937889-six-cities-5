import {createSelector} from "reselect";
import {NameSpace} from "../root-reducer";
import {sortOffers} from "../../utils";
import {getActiveCity, getActiveSorter} from "../app/selectors";

const getOffers = (state) => state[NameSpace.DATA].offers;

const getOfferIdFromUrl = (ownProps) => Number(ownProps.match.params.id);

const getOffersByCity = createSelector([getOffers, getActiveCity],
    (offers, city) => offers.filter((it) => it.city.name === city));

const getSortedOffers = createSelector([getOffersByCity, getActiveSorter],
    (offers, activeSorter) => sortOffers(offers, activeSorter));

const getOffersByCityNumber = createSelector(getOffersByCity, (offers) => offers.length);

// const getOfferById = createSelector([getOffersByCity, (state, ownProps) => Number(ownProps.match.params.id)],
//     (offers, id) => offers.find((it) => it.id === id));

const getNearOffers = (state) => state[NameSpace.DATA].nearOffersById;

const getReviewsById = (state) => state[NameSpace.DATA].reviews;

const getOfferByIdFromServer = (state) => state[NameSpace.DATA].offerById;

const getIsLoadedOffers = (state) => state[NameSpace.DATA].isLoadedOffers;
const getIsLoadedOffer = (state) => state[NameSpace.DATA].isLoadedOfferById;
const getIsLoadedReviews = (state) => state[NameSpace.DATA].isLoadedReviews;
const getIsLoadedNearOffers = (state) => state[NameSpace.DATA].isLoadedNearOffers;


export {
  getOffers,
  getOffersByCity,
  getSortedOffers,
  getOffersByCityNumber,
  // getOfferById,
  getOfferIdFromUrl,
  getReviewsById,
  getNearOffers,
  getOfferByIdFromServer,
  getIsLoadedOffers,
  getIsLoadedOffer,
  getIsLoadedReviews,
  getIsLoadedNearOffers};
