import React from "react";

import PropTypes from "prop-types";
import {Months} from "../../const";

const OfferReview = ({review}) => {
  const {id, userInfo: {avatar, name}, rating, text, date} = review;

  return (
    <li key={id} className="reviews__review">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar"></img>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={`${new Date(date).toDateString()}`}>{Months[new Date(date).getMonth()]} {new Date(date).getFullYear()}</time>
      </div>
    </li>
  );
};

OfferReview.propTypes = {
  review: PropTypes.object.isRequired,
};

export default OfferReview;

