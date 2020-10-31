import {adaptOffer} from "../../utils";

export const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
};

const loadOffers = (loadedOffers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: loadedOffers
});

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(
        data.map((it) => adaptOffer(it))
    )))
);
