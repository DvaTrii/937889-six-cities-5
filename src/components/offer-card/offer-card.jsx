import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {setHoveredOfferId, resetHoveredOfferId} from "../../store/action";
import {connect} from "react-redux";

const OfferCard = ({card, cardClass, setHoveredOfferIdAction, resetHoveredOfferIdAction}) => {

  const {id, previewImage, isPremium, isBookmark, price, title, type, rating} = card;

  return (
    <article className={`${cardClass} place-card`}
      onMouseEnter={() => {
        setHoveredOfferIdAction(id);
      }}
      onMouseLeave={() => {
        resetHoveredOfferIdAction();
      }}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image"
            src={previewImage}
            width="260" height="200"
            alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button
           ${isBookmark && `place-card__bookmark-button--active`}
           button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">{isBookmark ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmark: PropTypes.bool,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
  cardClass: PropTypes.string.isRequired,
  setHoveredOfferIdAction: PropTypes.func.isRequired,
  resetHoveredOfferIdAction: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  hoveredOfferId: state.hoveredOfferId,
});

const mapDispatchToProps = (dispatch) => ({
  setHoveredOfferIdAction(id) {
    dispatch(setHoveredOfferId(id));
  },
  resetHoveredOfferIdAction() {
    dispatch(resetHoveredOfferId());
  }
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
