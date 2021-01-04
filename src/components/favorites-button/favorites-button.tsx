import * as React from "react";
import {connect} from "react-redux";
import {postOfferToFavorite} from "../../store/data/operations";
import {FavoritesButtonClassPrefix, FavoritesRequestType} from "../../const";

type Props = {
  classPrefix: string,
  isBookmark?: boolean,
  offerId: number,
  toggleIsBookmarkProperty: (id: number, status: number) => void
}

const FavoritesButton: React.FC<Props> = ({classPrefix, isBookmark, offerId, toggleIsBookmarkProperty}) => {
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
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{isBookmark ? `In bookmarks` : `To bookmarks`}</span>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleIsBookmarkProperty(id, status) {
    dispatch(postOfferToFavorite(id, status));
  }
});

export {FavoritesButton};
export default connect(null, mapDispatchToProps)(FavoritesButton);
