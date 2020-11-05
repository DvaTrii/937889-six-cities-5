import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import OfferDetailed from "../../offer-detailed/offer-detailed";
import Header from "../../header/header";
import OffersList from "../../offers-list/offers-list";

import {CardClass} from "../../../const";
import {
  getIsLoadedNearOffers,
  getIsLoadedOffer,
  getIsLoadedReviews,
  getNearOffers,
  getOfferByIdFromServer, getOfferIdFromUrl,
  getReviewsById
} from "../../../store/data/selectors";
import {fetchOfferById, fetchReviewsList, fetchNearOffersById} from "../../../store/data/operations";

class OfferPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.id = props.id;
  }

  componentDidMount() {
    this.props.getOfferByIdAction(this.id);
    this.props.getNearOffersByIdAction(this.id);
    this.props.getReviewsListAction(this.id);
  }

  render() {
    return (
      <div className="page">

        <Header />

        <main className="page__main page__main--property">

          <OfferDetailed
            offer={this.props.offer}
            reviews={this.props.reviews}
            nearOffers={this.props.nearOffers}
            isLoaded={this.props.isLoadedOffer}
            isLoadedNearOffers={this.props.isLoadedNearOffers}
          />

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OffersList
                  offers={this.props.nearOffers}
                  cardClass={CardClass.NEAR}
                  isLoaded={this.props.isLoadedNearOffers}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferPage.propTypes = {
  offer: PropTypes.object,
  reviews: PropTypes.array,
  nearOffers: PropTypes.array,
  isLoadedOffer: PropTypes.bool,
  isLoadedNearOffers: PropTypes.bool,
  id: PropTypes.number.isRequired,
  getOfferByIdAction: PropTypes.func,
  getNearOffersByIdAction: PropTypes.func,
  getReviewsListAction: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  return ({
    offer: getOfferByIdFromServer(state),
    reviews: getReviewsById(state),
    nearOffers: getNearOffers(state),
    isLoadedOffer: getIsLoadedOffer(state),
    isLoadedReviews: getIsLoadedReviews(state),
    isLoadedNearOffers: getIsLoadedNearOffers(state),
    id: getOfferIdFromUrl(ownProps),
  });
};

const mapDispatchToProps = (dispatch) => ({
  getOfferByIdAction(id) {
    dispatch(fetchOfferById(id));
  },
  getNearOffersByIdAction(id) {
    dispatch(fetchNearOffersById(id));
  },
  getReviewsListAction(id) {
    dispatch(fetchReviewsList(id));
  },
});

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
