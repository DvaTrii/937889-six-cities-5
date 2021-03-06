import {createSelector} from "reselect";
import {NameSpace} from "../root-reducer";
import {sortOffers, sortReviews} from "../../utils";
import {getActiveCity, getActiveSorter} from "../app/selectors";

const getOffers = (state) => state[NameSpace.DATA].offers;

const getOfferIdFromUrl = (ownProps) => Number(ownProps.match.params.id);

const getOffersByCity = createSelector([getOffers, getActiveCity],
    (offers, city) => offers.filter((it) => it.city.name === city));

const getSortedOffers = createSelector([getOffersByCity, getActiveSorter],
    (offers, activeSorter) => sortOffers(offers, activeSorter));

const getOffersByCityNumber = createSelector(getOffersByCity, (offers) => offers.length);

const getOfferById = (state) => state[NameSpace.DATA].offerById;

const getNearOffers = (state) => state[NameSpace.DATA].nearOffersById;

const getReviewsById = (state) => state[NameSpace.DATA].reviews;
const getSortedReviews = createSelector(getReviewsById, (reviews) => sortReviews(reviews));

const getOfferByIdFromServer = (state) => state[NameSpace.DATA].offerById;

const getIsLoadedOffers = (state) => state[NameSpace.DATA].isLoadedOffers;
const getIsLoadedOffer = (state) => state[NameSpace.DATA].isLoadedOfferById;
const getIsLoadedReviews = (state) => state[NameSpace.DATA].isLoadedReviews;
const getIsLoadedNearOffers = (state) => state[NameSpace.DATA].isLoadedNearOffers;

const getFavoritesOffers = (state) => state[NameSpace.DATA].favoritesOffers;
const getFavoritesOffersNumber = createSelector(getFavoritesOffers, (favoritesOffers) => favoritesOffers.length);
const getFavoriteOffersCities = createSelector(getFavoritesOffers, (favoritesOffers) => [...new Set(favoritesOffers.map((it) => it.city.name))]);

export {
  getOffers,
  getOffersByCity,
  getSortedOffers,
  getOffersByCityNumber,
  getOfferById,
  getFavoritesOffers,
  getFavoriteOffersCities,
  getFavoritesOffersNumber,
  getOfferIdFromUrl,
  getReviewsById,
  getSortedReviews,
  getNearOffers,
  getOfferByIdFromServer,
  getIsLoadedOffers,
  getIsLoadedOffer,
  getIsLoadedReviews,
  getIsLoadedNearOffers};
