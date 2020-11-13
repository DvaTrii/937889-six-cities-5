import React from "react";
import {FavoritesButtonClassPrefix} from "../../const";
import PropTypes from "prop-types";

export const FavoritesButton = ({classPrefix, isBookmark}) => {
  return (
    <button
      className={`${classPrefix}__bookmark-button button
              ${isBookmark && classPrefix + `__bookmark-button--active`}`}
      type="button"
      // onClick={/* func from dispatch*/}
    >
      <svg
        className={`${classPrefix}__bookmark-icon`}
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
  isBookmark: PropTypes.bool
};
