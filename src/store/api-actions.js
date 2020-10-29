import {loadOffers} from "./action";
import {adaptOffer} from "../utils";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(
        data.map((it) => adaptOffer(it))
    )))
);
