import * as React from "react";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {postReview} from "../../store/data/operations";
import {getOfferIdFromUrl} from "../../store/data/selectors";
import {extend} from "../../utils";
import {ReviewSymbolsNumber} from "../../const";

const ReviewForm = ({offerId, postCurrentReview}) => {

  const [review, setReview] = React.useState({
    rating: ``,
    review: ``
  });

  const [isValidForm, setIsValidForm] = React.useState(false);

  React.useEffect(() => {
    validateForm();
  }, [review]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    postCurrentReview(review, offerId);
    setReview(() => {
      return {
        rating: ``,
        review: ``
      };
    });
    setIsValidForm(false);
  };

  const validateForm = () => {
    const isValid = review.rating &&
      (review.review.length >= ReviewSymbolsNumber.MIN
        && review.review.length <= ReviewSymbolsNumber.MAX);
    setIsValidForm(isValid);
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReview(extend(review, {[name]: value}));
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          onChange={handleFieldChange}
          checked={review.rating === `5`}
        />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          onChange={handleFieldChange}
          checked={review.rating === `4`}
        />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          onChange={handleFieldChange}
          checked={review.rating === `3`}
        />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          onChange={handleFieldChange}
          checked={review.rating === `2`}
        />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-stars"
          type="radio"
          onChange={handleFieldChange}
          checked={review.rating === `1`}
        />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
        value={review.review}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValidForm}>
          Submit</button>
      </div>
    </form>

  );
};

ReviewForm.propTypes = {
  postCurrentReview: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  return ({
    offerId: getOfferIdFromUrl(ownProps),
  });
};

const mapDispatchToProps = (dispatch) => ({
  postCurrentReview(data, id) {
    dispatch(postReview(data, id));
  }
});

export {ReviewForm};
export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(ReviewForm);
