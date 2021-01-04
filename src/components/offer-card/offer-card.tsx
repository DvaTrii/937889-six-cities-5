import * as React from "react";
import {Link} from "react-router-dom";
import {setHoveredOfferId, resetHoveredOfferId} from "../../store/app/actions";
import {getHoveredOfferId} from "../../store/app/selectors";
import {connect} from "react-redux";
import FavoritesButton from "../favorites-button/favorites-button";
import {CardClass, FavoritesButtonClassPrefix} from "../../const";
import {OfferCardType} from "../../types";

type Props = {
  card: OfferCardType,
  cardClass: string,
  setHoveredOfferIdAction: (id: number) => void,
  resetHoveredOfferIdAction: () => void
}

const OfferCard: React.FC<Props> = ({card, cardClass, setHoveredOfferIdAction, resetHoveredOfferIdAction}) => {

  const {id, previewImage, isPremium, isBookmark, price, title, type, rating} = card;

  return (
    <article className={`${cardClass}card place-card`}
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
      <div className={`${cardClass === CardClass.MAIN ? `cities__` : cardClass}image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image"
            src={previewImage}
            width={`${cardClass === CardClass.FAVORITE ? 150 : 260}`}
            height={`${cardClass === CardClass.FAVORITE ? 110 : 200}`}
            alt="Place image" />
        </a>
      </div>
      <div className={`${cardClass === CardClass.FAVORITE ? `favorites__card-info` : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoritesButton
            classPrefix={FavoritesButtonClassPrefix.MAIN}
            isBookmark={isBookmark}
            offerId={id}
          />
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

const mapStateToProps = (state) => ({
  hoveredOfferId: getHoveredOfferId(state),
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
