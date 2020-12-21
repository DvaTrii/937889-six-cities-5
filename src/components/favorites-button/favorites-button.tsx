import * as React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {postOfferToFavorite} from "../../store/data/operations";
import {FavoritesButtonClassPrefix, FavoritesRequestType} from "../../const";

const FavoritesButton = ({classPrefix, isBookmark, offerId, toggleIsBookmarkProperty}) => {
  return (
    <button
      className={`${classPrefix}__bookmark-button button
              ${isBookmark ? classPrefix + `__bookmark-button--active` : ``}`}
      type="button"
      onClick={() => {
        toggleIsBookmarkProperty(offerId,
            isBookmark ?
              FavoritesRequestType.POP_OUT :
              FavoritesRequestType.PUT_IN);
      }}
    >
      <svg
        className={`place-card__bookmark-icon`}
        width={`${classPrefix === FavoritesButtonClassPrefix.MAIN ? `18` : `31`}`}
        height={`${classPrefix === FavoritesButtonClassPrefix.MAIN ? `19` : `33`}`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isBookmark ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

FavoritesButton.propTypes = {
  classPrefix: PropTypes.string.isRequired,
  isBookmark: PropTypes.bool,
  offerId: PropTypes.number.isRequired,
  toggleIsBookmarkProperty: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleIsBookmarkProperty(id, status) {
    dispatch(postOfferToFavorite(id, status));
  }
});

export {FavoritesButton};
export default connect(null, mapDispatchToProps)(FavoritesButton);
