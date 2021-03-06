import * as React from "react";
import {connect} from "react-redux";

import OfferDetailed from "../../offer-detailed/offer-detailed";
import Header from "../../header/header";
import OffersList from "../../offers-list/offers-list";

import {CardClass} from "../../../const";
import {
  getIsLoadedNearOffers,
  getIsLoadedOffer,
  getIsLoadedReviews,
  getNearOffers,
  getOfferByIdFromServer,
  getOfferIdFromUrl,
  getSortedReviews} from "../../../store/data/selectors";
import {fetchOfferById, fetchReviewsList, fetchNearOffersById} from "../../../store/data/operations";
import {setIsLoadFlagNearOffers, setIsLoadFlagOffer, setIsLoadFlagReviews} from "../../../store/data/actions";
import {getAuthorizationStatus} from "../../../store/user/selectors";

import {OfferCardType, ReviewType} from "../../../types";

type Props = {
  id: number,
  offer: OfferCardType,
  reviews: Array<ReviewType>,
  nearOffers: Array<OfferCardType>,
  isLoadedOffer: boolean,
  isLoadedNearOffers: boolean,
  authorizationStatus: boolean,
  getOfferInformation: (number) => void,
  setIsLoadFlag: (boolean) => void,
  children?: React.ReactNode
}

const OfferPage: React.FC = (props: Props) => {
  const {id, offer, reviews, nearOffers, isLoadedOffer, isLoadedNearOffers,
    authorizationStatus, getOfferInformation, setIsLoadFlag} = props;

  React.useEffect(() => {
    getOfferInformation(id);
    return () => setIsLoadFlag(false);
  }, [id]);

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">

        <OfferDetailed
          offer={offer}
          reviews={reviews}
          nearOffers={nearOffers}
          isLoaded={isLoadedOffer}
          isLoadedNearOffers={isLoadedNearOffers}
          authorizationStatus={authorizationStatus}
        />

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList
                offers={nearOffers}
                cardClass={CardClass.NEAR}
                isLoaded={isLoadedNearOffers}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return ({
    offer: getOfferByIdFromServer(state),
    reviews: getSortedReviews(state),
    nearOffers: getNearOffers(state),
    isLoadedOffer: getIsLoadedOffer(state),
    isLoadedReviews: getIsLoadedReviews(state),
    isLoadedNearOffers: getIsLoadedNearOffers(state),
    id: getOfferIdFromUrl(ownProps),
    authorizationStatus: getAuthorizationStatus(state),
  });
};

const mapDispatchToProps = (dispatch) => ({
  getOfferInformation(id) {
    dispatch(fetchOfferById(id));
    dispatch(fetchNearOffersById(id));
    dispatch(fetchReviewsList(id));
  },
  setIsLoadFlag(setFlag) {
    dispatch(setIsLoadFlagOffer(setFlag));
    dispatch(setIsLoadFlagReviews(setFlag));
    dispatch(setIsLoadFlagNearOffers(setFlag));
  }
});

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
